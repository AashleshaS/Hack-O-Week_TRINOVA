// ==========================================================
// WEEK 1 - WEEK 10 COMPLETE CHATBOT LOGIC (FINAL)
// ==========================================================

// --- 1. KNOWLEDGE BASE & CONFIG ---
const faqDatabase = [
    { 
        id: "help", 
        keywords: ["help", "menu", "option", "ask", "question", "capable", "do", "list", "hi", "hello", "hey"], 
        answer: "I can help you with institute-related queries! Try asking me about:\n📘 Admissions (Cutoffs, Dates, Eligibility)\n📝 Exams (Midsems, Practicals, Semesters)\n💰 Fees (Branch-wise costs)\n🏢 Hostels & Timings\n📞 Contact Information" 
    },
    { id: "fees", keywords: ["fee", "cost", "price", "amount", "rupee", "pay"], answer: "The general annual institute fee is ₹1,60,000. Please specify your branch for exact details." },
    { id: "timings", keywords: ["time", "timing", "hour", "open", "close", "schedule"], answer: "Institute timings are 9:00 AM to 4:00 PM, Monday to Saturday." },
    { id: "hostel", keywords: ["hostel", "accommodation", "stay", "room", "mess", "bed"], answer: "Hostel facilities are available. Boys hostel is on-campus, Girls hostel is 2km away." },
    { id: "exam", keywords: ["exam", "test", "midsem", "endsem", "paper", "mark", "practical", "viva", "timetable"], answer: "Exams are held twice a year. Mid-sems in September/February and End-sems in December/May." },
    { id: "admission", keywords: ["admission", "apply", "join", "entrance", "seat", "cutoff", "eligibility", "deadline", "date"], answer: "Admissions are based on JEE Main and MHT-CET scores. Forms open in May." },
    { id: "contact", keywords: ["contact", "phone", "email", "number", "reach", "admin"], answer: "You can contact the admin office at 9876543210 or email info@sitnagpur.edu." }
];

// --- DETAILED DATA DICTIONARIES ---
const courseFees = { 
    "CS": "₹1,80,000", 
    "AIML": "₹1,85,000", 
    "IT": "₹1,75,000", 
    "Mechanical": "₹1,40,000", 
    "Civil": "₹1,35,000" 
};

const examDetails = {
    "midsem": "Mid-semester exams are usually 30 marks and held in the 3rd week of the semester.",
    "endsem": "End-semester exams are 60 marks comprehensive written tests.",
    "practical": "Practical/Viva exams are conducted one week before the end-sem theory exams."
};

const admissionDetails = {
    "cutoff": "Expected cutoffs: CS > 92%, AIML > 90%, IT > 85%, Core Branches > 75% in CET/JEE.",
    "eligibility": "You need a minimum of 50% in 12th standard (PCM) to be eligible.",
    "dates": "Admission forms open in the first week of May and close in mid-July."
};

// Expanded Synonyms (Handling plurals manually since stemmer is removed)
const synonyms = {
    "tuition": "fee", "payment": "fee", "dues": "fee", "fees": "fee",
    "residence": "hostel", "dorm": "hostel", "hostels": "hostel",
    "enroll": "admission", "admissions": "admission",
    "call": "contact", "contacts": "contact",
    "percentage": "eligibility", "rank": "cutoff", "cutoffs": "cutoff",
    "exams": "exam", "tests": "exam", "test": "exam",
    "practicals": "practical", "midsems": "midsem", 
    "endsems": "endsem", "dates": "date", "deadlines": "deadline",
    "questions": "question", "options": "option"
};

const stopWords = ["is", "the", "are", "of", "in", "at", "to", "for", "a", "an", "and", "or", "what", "where", "when", "how", "tell", "me", "about"];

// --- 2. STATE MANAGEMENT ---
let state = { lastIntent: null, lastEntity: null, consecutiveFails: 0, currentChannel: "web", analyticsLog: [] };

// --- 3. CORE NLP FUNCTIONS ---

function preprocess(text) {
    // 1. Lowercase and remove punctuation
    let cleanText = text.toLowerCase().replace(/[^\w\s]/g, "");
    // 2. Tokenize and remove stop words
    let tokens = cleanText.split(/\s+/).filter(word => word && !stopWords.includes(word));
    return tokens;
}

function expandSynonyms(tokens) { 
    return tokens.map(t => synonyms[t] || t); 
}

function extractEntities(tokens) {
    let entities = { course: null, sem: null, examType: null, adminType: null };
    
    // Course Detection
    if (tokens.some(t => ["cs", "computer", "cse"].includes(t))) entities.course = "CS";
    else if (tokens.some(t => ["ai", "aiml", "ml", "artificial"].includes(t))) entities.course = "AIML";
    else if (tokens.some(t => ["it", "information"].includes(t))) entities.course = "IT";
    else if (tokens.some(t => ["mech", "mechanical"].includes(t))) entities.course = "Mechanical";
    else if (tokens.some(t => ["civil"].includes(t))) entities.course = "Civil";
    
    // Semester Detection
    tokens.forEach((t, i) => {
        if (t.includes("sem") && tokens[i+1] && !isNaN(tokens[i+1])) entities.sem = tokens[i+1];
        if (!isNaN(parseInt(t)) && tokens[i+1] === "sem") entities.sem = parseInt(t);
    });

    // Exam Specifics
    if (tokens.some(t => ["midsem", "mid", "internal"].includes(t))) entities.examType = "midsem";
    else if (tokens.some(t => ["endsem", "end", "final"].includes(t))) entities.examType = "endsem";
    else if (tokens.some(t => ["practical", "viva", "lab"].includes(t))) entities.examType = "practical";

    // Admission Specifics
    if (tokens.some(t => ["cutoff", "score", "percentile", "rank"].includes(t))) entities.adminType = "cutoff";
    else if (tokens.some(t => ["eligibility", "percentage", "qualify"].includes(t))) entities.adminType = "eligibility";
    else if (tokens.some(t => ["date", "deadline", "last", "start"].includes(t))) entities.adminType = "dates";

    return entities;
}

function findBestMatch(tokens) {
    let bestMatch = null;
    let maxScore = 0;
    faqDatabase.forEach(doc => {
        let score = tokens.reduce((acc, token) => acc + (doc.keywords.includes(token) ? 1 : 0), 0);
        if (score > maxScore) { maxScore = score; bestMatch = doc; }
    });
    return maxScore >= 1 ? { doc: bestMatch, score: maxScore } : null;
}

// --- 4. WEEK 8: FALLBACKS ---
function handleFallback() {
    state.consecutiveFails += 1;
    if (state.consecutiveFails === 1) return "I didn't quite catch that. Are you asking about admissions, fees, or exams?";
    state.consecutiveFails = 0; 
    return "I couldn't find the answer. Please contact a human advisor at admin@sitnagpur.edu. 🧑‍💼";
}

// --- 5. WEEK 9: MULTICHANNEL FORMATTING ---
function formatForChannel(text) {
    if (state.currentChannel === "whatsapp") return `🤖 *Bot:*\n${text}\n_Reply "Menu" for options._`;
    if (state.currentChannel === "mobile") return text.length > 80 ? text.substring(0, 80) + "..." : text;
    return text;
}

// --- 6. WEEK 10: ANALYTICS ---
function logInteraction(query, intent, score, fallbackTriggered) {
    state.analyticsLog.push({ timestamp: new Date().toLocaleTimeString(), query, intent: intent || "None", confidence: score, fallback: fallbackTriggered });
}

// --- 7. MAIN LOGIC HANDLER ---
function chatbotReply(userMessage) {
    // Hidden UI Commands
    if (userMessage === "/whatsapp") { state.currentChannel = "whatsapp"; return "Switched to WhatsApp Mode 📱"; }
    if (userMessage === "/web") { state.currentChannel = "web"; return "Switched to Web Mode 💻"; }
    if (userMessage === "/logs") { console.table(state.analyticsLog); return "Analytics printed to Browser Console (Press F12 to view)! 📈"; }

    let tokens = preprocess(userMessage);
    tokens = expandSynonyms(tokens); // Map plurals to singulars here
    let entities = extractEntities(tokens);
    let matchResult = findBestMatch(tokens);
    let intent = matchResult ? matchResult.doc.id : null;

    // Context Handling (Memory)
    if (!intent && state.lastIntent && (entities.course || entities.sem || entities.examType || entities.adminType)) {
        intent = state.lastIntent;
        matchResult = { doc: faqDatabase.find(d => d.id === intent), score: 1 };
    } else if (intent) {
        state.lastIntent = intent;
    }

    let rawResponse = "";
    let fallbackTriggered = false;

    if (matchResult) {
        state.consecutiveFails = 0; // Reset fallback counter
        
        // --- DYNAMIC RESPONSE GENERATION ---
        if (intent === "fees" && entities.course) {
            rawResponse = `The annual fee for the ${entities.course} branch is ${courseFees[entities.course]}.`;
        } 
        else if (intent === "exam") {
            if (entities.examType) rawResponse = examDetails[entities.examType];
            else if (entities.sem) rawResponse = `Semester ${entities.sem} exams will be scheduled as per the academic calendar in Dec/May.`;
            else rawResponse = matchResult.doc.answer;
        } 
        else if (intent === "admission") {
            if (entities.adminType) rawResponse = admissionDetails[entities.adminType];
            else rawResponse = matchResult.doc.answer;
        } 
        else {
            rawResponse = matchResult.doc.answer;
        }
    } else {
        rawResponse = handleFallback();
        fallbackTriggered = true;
    }

    logInteraction(userMessage, intent, matchResult ? matchResult.score : 0, fallbackTriggered);
    return formatForChannel(rawResponse);
}

// ==========================================================
// FRONTEND CONNECTORS
// ==========================================================
function sendMessage() {
    const inputBox = document.getElementById("userInput");
    const chatBox = document.getElementById("chat-box");
    const userText = inputBox.value.trim();

    if (!userText) return;

    addMessage(userText, "user");
    
    // Process bot reply
    const botReply = chatbotReply(userText);
    
    // Add small delay for natural chat feel
    setTimeout(() => { addMessage(botReply, "bot"); }, 500);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Allow pressing "Enter" to send message
function handleEnter(event) { if (event.key === "Enter") sendMessage(); }

// Renders the message bubbles in the HTML
function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
}