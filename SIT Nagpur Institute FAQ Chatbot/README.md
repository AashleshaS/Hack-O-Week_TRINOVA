# 🎓 SIT Nagpur Institute FAQ Chatbot

A smart, purely client-side NLP Chatbot built using Vanilla HTML, CSS, and JavaScript. This project was developed as part of the **Hack-o-Week** college event, fulfilling 10 progressive problem statements from basic rule-based matching to advanced context handling and analytics.

## 🚀 Features (Hack-o-Week 1 to 10)

* **Week 1 & 4 (Knowledge Base & TF-IDF):** Keyword-based scoring algorithm to find the most relevant FAQ answer.
* **Week 2 (Preprocessing):** Cleans user input by lowercasing, removing punctuation, and filtering out noise (stopwords).
* **Week 3 (Synonym Awareness):** Maps multiple terms (e.g., "fees", "tuition", "dues") to a singular intent root.
* **Week 5 (Intent Classification):** Categorizes user input into intents like Admissions, Exams, Fees, or Hostels.
* **Week 6 (Entity Extraction):** Extracts specific details from the query such as Engineering Branches (CS, AIML, Mech), Semesters, and Sub-topics (Cutoffs, Practicals).
* **Week 7 (Context Memory):** Remembers the topic of conversation. (e.g., If you ask "What is the fee?", and then ask "And for CS?", it knows you are asking about CS fees).
* **Week 8 (Fallbacks & Handover):** Gracefully handles unknown queries and offers human handover after consecutive failures.
* **Week 9 (Multichannel Mockup):** Simulates different UI environments (Web, Mobile, WhatsApp).
* **Week 10 (Analytics):** Silently logs user interactions, intents, and confidence scores for future improvements.

---

## 🧠 Architecture Flow Diagram

```mermaid
graph TD
    A[User Input] --> B[Preprocessing]
    B -->|Remove Punctuation & Stopwords| C[Synonym Expansion]
    C -->|Map Plurals/Synonyms| D[Entity Extraction]
    D -->|Identify Course, Sem, Exam| E[Intent Matcher]
    E -->|Calculate Keyword Scores| F{Match Found?}
    F -- Yes --> G[Context Manager]
    F -- No --> H[Fallback Handler]
    G -->|Inject Entities & Keep Memory| I[Response Generator]
    H -->|Human Handover if failed twice| I
    I --> J[Channel Formatter]
    J -->|Format for Web/WhatsApp| K[Analytics Logger]
    K --> L[Bot Output to Screen]
