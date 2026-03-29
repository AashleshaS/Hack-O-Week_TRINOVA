# 🚀 Hack-o-Week Portfolio: AI & IoT Systems

Welcome to the central repository for my **Hack-o-Week** projects. 

-----
## 📂 Project Directory

### 🗺️ 1. AI Travel Planner (Full-Stack React)

An intelligent travel assistant that generates personalized, day-by-day itineraries using AI.

  * **Key Innovation:** Implemented a **Deterministic Fallback Engine** that generates structured itineraries even if the external AI API fails, ensuring 100% uptime.
  * **Core Tech:** React + Vite, Tailwind CSS, TanStack Query, Radix UI.
  * **Architecture:** Modular routing with a secure `AuthProvider` for session management.

### 🏗️ 2. Industrial Forklift Safety System (IoT/Embedded)

A mission-critical safety prototype designed to prevent warehouse collisions using ultrasonic wave detection.

  * **Key Innovation:** Integrated a **Real-time Halting Mechanism** that overrides motor movement (Stepper Motor) the moment an obstacle is detected within 50cm.
  * **Core Tech:** Arduino Uno (C++), HC-SR04 Ultrasonic Sensor, A4988 Driver, Wokwi Simulation.
  * **Safety Features:** Automated auditory buzzers and instant motor-stop logic.

### 🚪 3. PIR Motion-Based Smart Door (IoT/Automation)

An energy-efficient building automation system that manages entry points based on human infrared heat signatures.

  * **Key Innovation:** Uses **State-based Logic** to manage a Servo-actuated door, including a visual LED status indicator and a cooldown delay to prevent mechanical wear.
  * **Core Tech:** Arduino Uno (C++), PIR HC-SR501, SG90 Servo, Wokwi.
  * **Efficiency:** Motion-only activation significantly reduces power consumption compared to manual or timed systems.

-----

## 🛠️ Unified Technology Stack

This hackathon required a rapid context-shift between web architecture and electrical engineering:

| Category | Tools & Technologies |
| :--- | :--- |
| **Frontend & UX** | React, Vite, Tailwind CSS, Radix UI, Lucide Icons |
| **State & Data** | TanStack Query, React Router, REST APIs |
| **Embedded Systems** | C++, Arduino IDE, Wokwi Simulation |
| **Hardware Logic** | Pulse-timing (Ultrasonic), IR Sensing (PIR), PWM (Servos) |

-----

## 🎯 Engineering Achievements

1.  **Hardware-Software Synergy:** Demonstrated the ability to write high-level asynchronous JavaScript for the web and low-level synchronous C++ for microcontrollers.
2.  **Robust Error Handling:** Every project includes a "Failure Mode"—the Travel Planner has a fallback itinerary, and the IoT systems have default "Safe States" (Brakes engaged/Door closed).
3.  **Simulation Mastery:** Successfully modeled complex hardware interactions (Stepper drivers, sensors, and servos) entirely in a virtual environment, proving rapid prototyping capabilities.

-----

## 🚀 How to Navigate This Repo

1.  **For Web:** Navigate to `/AI-Travel-Planner`, run `npm install` and `npm run dev`.
2.  **For IoT:** Navigate to `/Forklift-Safety` or `/Smart-Door` and click the **Wokwi Simulation Link** in the local README to see the circuit in action.

