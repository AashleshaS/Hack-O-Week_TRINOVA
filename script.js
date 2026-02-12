// ==========================================================
// WEEK 1 - WEEK 7 COMPLETE BACKEND LOGIC (Simulated in JS)
// ==========================================================

// --- CONFIGURATION & DATABASE ---

// 1. KNOWLEDGE BASE (Week 1 & 4 Database)
// We store "keywords" to simulate TF-IDF matching importance
const faqDatabase = [
    { 
        id: "fees", 
        keywords: ["fee", "cost", "price", "amount", "rupees"], 
        answer: "The annual institute fees are ₹1,60,000 for all engineering branches." 
    },
    { 
        id: "timings", 
        keywords: ["time", "timing", "hour", "open", "close"], 
        answer: "Institute timings are 9:00 AM to 4:00 PM, Monday to Saturday." 
    },
    { 
        id: "hostel", 
        keywords: ["hostel", "accommodation", "stay", "room", "mess"], 
        answer: "Hostel facilities are available. Boys hostel is on-campus, Girls hostel is 2km away." 
    },
    { 
        id: "exam", 
        keywords: ["exam", "test", "midsem", "endsem", "paper"], 
        answer: "Mid-sem exams start in September. End-sem exams start in December." 
    },
    { 
        id: "admission", 
        keywords: ["admission", "apply", "join", "entrance", "seat"], 
        answer: "Admissions are based on JEE Main and MHT-CET scores." 
    },
    { 
        id: "contact", 
        keywords: ["contact", "phone", "email", "number", "reach"], 
        answer: "You can contact the admin office at 9876543210 or email info@sitnagpur.edu." 
    },
    {
        id: "cs_course",
        keywords: ["cs", "computer", "science", "coding"],
        answer: "Computer Science (CS) is our flagship course with 100% placement."
    }
];

// 2. SYNONYMS (Week 3)
const synonyms = {
    "tuition": "fee",
    "payment": "fee",
    "dues": "fee",
    "schedule": "time",
    "residence": "hostel",
    "dorm": "hostel",
    "tests": "exam",
    "enroll": "admission",
    "call": "contact"
};

// 3. STOPWORDS (Week 2)
// Words we want to ignore because they don't add meaning
const stopWords = ["is", "the", "are", "of", "in", "at", "to", "for", "a", "an", "and", "or", "what", "where", "when", "how"];

// 4. CONTEXT MEMORY (Week 7)
// Stores the last discussed topic
let conversationContext = {
    lastIntent: null,
    lastEntity: null
};

// ==========================================================
// CORE FUNCTIONS
// ==========================================================

// --- WEEK 2: PREPROCESSING ---
function preprocess(text) {
    // 1. Lowercase
    let cleanText = text.toLowerCase();
    
    // 2. Remove Punctuation (keep simple letters and numbers)
    cleanText = cleanText.replace(/[^\w\s]/g, "");
    
    // 3. Tokenization (Split into array of words)
    let tokens = cleanText.split(/\s+/);
    
    // 4. Remove Stopwords
    tokens = tokens.filter(word => !stopWords.includes(word));
    
    return tokens;
}

// --- WEEK 3: SYNONYM EXPANSION ---
function expandSynonyms(tokens) {
    return tokens.map(token => synonyms[token] || token);
}

// --- WEEK 6: ENTITY EXTRACTION ---
function extractEntities(tokens) {
    let entities = {
        date: null,
        course: null
    };

    // Simple keyword checking for entities
    // In a real backend, this would use Regex or Named Entity Recognition (NER) models
    if (tokens.includes("cs") || tokens.includes("computer")) entities.course = "CS";
    if (tokens.includes("mech")) entities.course = "Mechanical";
    
    // Detecting simple "dates" (e.g., words ending in 'th' or names of months)
    tokens.forEach(t => {
        if (t.match(/\d+(st|nd|rd|th)/) || ["monday", "tuesday", "september"].includes(t)) {
            entities.date = t;
        }
    });

    return entities;
}

// --- WEEK 5: INTENT CLASSIFICATION ---
function identifyIntent(tokens) {
    // Simple rule: check if any token matches our database IDs or main keywords
    // For Week 5, we just want to know *what category* the user is asking about.
    
    for (let doc of faqDatabase) {
        // If query contains a strong keyword from a category, return that category ID
        const intersection = tokens.filter(t => doc.keywords.includes(t));
        if (intersection.length > 0) return doc.id;
    }
    return null; // Unknown intent
}

// --- WEEK 4: RETRIEVAL (SIMPLIFIED TF-IDF) ---
function findBestMatch(tokens) {
    let bestMatch = null;
    let maxScore = 0;

    faqDatabase.forEach(doc => {
        let score = 0;
        tokens.forEach(token => {
            if (doc.keywords.includes(token)) {
                score += 1; // In real TF-IDF, this 1 would be a calculated weight
            }
        });

        if (score > maxScore) {
            maxScore = score;
            bestMatch = doc;
        }
    });

    return maxScore > 0 ? bestMatch : null;
}

// ==========================================================
// MAIN LOGIC HANDLER (The "Brain")
// ==========================================================

function chatbotReply(userMessage) {
    // 1. Preprocess
    let tokens = preprocess(userMessage);
    
    // 2. Expand Synonyms
    tokens = expandSynonyms(tokens);
    
    // 3. Extract Entities
    let entities = extractEntities(tokens);
    
    // 4. Identify Intent
    let intent = identifyIntent(tokens);

    // --- WEEK 7: CONTEXT HANDLING (FIXED) ---
    // Fix: If the detected intent is just "cs_course" (which is basically just a noun),
    // AND we have a previous topic (like fees), assume the user is still asking about that topic.
    if ((!intent || intent === "cs_course") && conversationContext.lastIntent) {
        console.log("Using Context: " + conversationContext.lastIntent);
        
        // Use the previous intent (e.g., "fees") instead of the new weak intent
        intent = conversationContext.lastIntent;
        
        // Add the old intent keywords to help find the match
        // (e.g., add "fee", "cost" to the search list)
        tokens.push(...faqDatabase.find(d => d.id === intent).keywords);
    }

    // Update Context for next turn
    if (intent) conversationContext.lastIntent = intent;
    if (entities.course) conversationContext.lastEntity = entities.course;

    // 5. Retrieve Answer
    const result = findBestMatch(tokens);

    // 6. Formulate Response
    if (result) {
        // Dynamic Response for Week 6 & 7
        if (entities.course && result.id === "fees") {
            return `The fees for ${entities.course} branch is ₹1,60,000.`;
        }
        if (entities.course && result.id === "exam") {
            return `The exams for ${entities.course} start on 15th December.`;
        }
        return result.answer;
    } else {
        return "I'm sorry, I didn't understand that. Can you rephrase?";
    }
}
// ==========================================================
// FRONTEND CONNECTORS (Existing Code)
// ==========================================================

function sendMessage() {
    const inputBox = document.getElementById("userInput");
    const chatBox = document.getElementById("chat-box");
    const userText = inputBox.value.trim();

    if (userText === "") return;

    addMessage(userText, "user");

    // Call the "Backend" Logic
    const botReply = chatbotReply(userText);

    setTimeout(() => {
        addMessage(botReply, "bot");
    }, 500);

    inputBox.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleEnter(event) {
    if (event.key === "Enter") sendMessage();
}

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
}