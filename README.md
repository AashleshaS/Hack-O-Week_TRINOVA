# 🚀 Hack-o-Week Portfolio: 

Welcome to the master repository for our **Hack-o-Week** submissions. 

This portfolio demonstrates a comprehensive capability to build intelligent software solutions and integrate them with simulated hardware environments.

---

## 📂 Project Directory

Below is a high-level summary of the four projects developed during this event. *(Navigate to the respective folders for detailed READMEs, flowcharts, and setup instructions for each project).*

###  SIT Nagpur Institute FAQ Chatbot (NLP/JavaScript)
A smart, purely client-side NLP Chatbot built using Vanilla HTML, CSS, and JavaScript. It progressed through 10 evolutionary problem statements to handle complex institute queries.
* **Key Features:** Synonym mapping, TF-IDF scoring, context/memory handling across follow-up questions, fallback handovers, and silent analytics logging.
* **Tech Stack:** Vanilla JS, HTML5, CSS3, DOM Manipulation.

### 1️⃣ AI Travel Planner (React + Vite)
An intelligent, full-stack travel planning web application that helps users discover destinations and generate highly personalized, day-by-day AI itineraries.
* **Key Features:** AI-driven itinerary generation, secure authentication flow, trip saving/management, and fallback deterministic routing if the AI API fails.
* **Tech Stack:** React, Vite, Tailwind CSS, Radix UI, TanStack Query, External AI APIs.

### 2️⃣ PIR Motion-Based Automatic Door System (IoT/Arduino)
A smart door automation system simulated entirely in Wokwi, designed to detect human motion and actuate a physical response.
* **Key Features:** Real-time motion detection, automated servo motor actuation (door opening/closing), visual LED indicators, and Serial Monitor activity logging.
* **Tech Stack:** Arduino Uno, C++, Wokwi Simulator, PIR Sensor (HC-SR04), Servo Motor (SG90).

### 3️⃣ Forklift Safety Alert System (IoT/Arduino)
An industrial safety prototype simulating a forklift that detects obstacles using sound waves and automatically halts movement to prevent collisions.
* **Key Features:** Distance measuring threshold logic, automated stepper motor halting, and real-time auditory buzzer alerts for operators.
* **Tech Stack:** Arduino Uno, C++, Wokwi Simulator, Ultrasonic Sensor (HC-SR04), Stepper Motor (A4988).

---

## 🛠️ Unified Technology Stack

This hackathon required rapidly switching contexts between different engineering disciplines:

| Discipline | Technologies Used |
| :--- | :--- |
| **Frontend Web** | React, Vite, Tailwind CSS, HTML, CSS, Radix UI |
| **Backend & Logic**| Vanilla JavaScript, REST APIs, TanStack Query |
| **AI & NLP** | Custom TF-IDF Algorithms, LLM API Integration |
| **Hardware & IoT** | Arduino Uno, C++, Wokwi Simulation, Various Sensors & Actuators |

---

## 🎯 Key Achievements & Learnings

1. **Versatility:** Successfully transitioned from building DOM-manipulating Javascript algorithms to writing embedded C++ for microcontrollers within the same event.
2. **Algorithm Design:** Built a custom stemming and context-memory algorithm from scratch without relying on heavy Python libraries like NLTK.
3. **Robust Architecture:** Engineered systems with "graceful degradation"—meaning if the AI API fails in the Travel Planner, or the user types gibberish in the Chatbot, the systems cleanly fall back to deterministic responses rather than crashing.

---

## 🚀 How to Navigate This Repository

1. Click into any of the project branches.
2. Read the specific `README.md` inside that folder for architecture diagrams and setup instructions.
3. Run the web apps locally or click the provided Wokwi links to view the hardware simulations in your browser!
