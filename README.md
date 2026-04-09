# 🚀 Hack-o-Week Portfolio: From Embedded IoT to AI Web Apps

Welcome to the master repository for our **Hack-o-Week** submissions. This repository showcases a specialized collection of projects bridging the gap between **Embedded Systems & IoT Simulations** and **Full-Stack AI Web Development**.

-----

## 📂 Project Directory

Below is a high-level summary of the four projects developed during this event. *(Navigate to the respective folders for detailed READMEs, flowcharts, and setup instructions).*

### 1️⃣ TripMind AI Travel Planner (React + Vite)

An intelligent, full-stack travel planning web application that helps users discover destinations and generate highly personalized, day-by-day AI itineraries.

  * **Key Features:** AI-driven itinerary generation, secure authentication flow, and fallback deterministic routing if the AI API fails.
  * **Tech Stack:** React, Vite, Tailwind CSS, Radix UI, OpenAI API.

### 2️⃣ Assembly Line Object Counter (IoT/Arduino)

An industrial automation simulation that uses ultrasonic waves to count objects moving on a conveyor belt in real-time.

  * **Key Features:** Precise distance-based detection, I2C LCD display integration, and logic to prevent multiple counts of the same object.
  * **Tech Stack:** Arduino Uno, C++, Wokwi, HC-SR04 Sensor, 16x2 LCD (I2C).

### 3️⃣ PIR Motion-Based Automatic Door System (IoT/Arduino)

A smart building automation prototype designed to detect human motion and actuate a physical response.

  * **Key Features:** Real-time motion detection, automated servo motor actuation, and visual LED status indicators.
  * **Tech Stack:** Arduino Uno, C++, Wokwi, PIR Sensor (HC-SR501), Servo Motor (SG90).

### 4️⃣ Forklift Safety Alert System (IoT/Arduino)

An industrial safety prototype simulating a forklift that detects obstacles and automatically halts movement to prevent collisions.

  * **Key Features:** 50cm "Virtual Bumper" logic, automated stepper motor halting, and auditory buzzer alerts.
  * **Tech Stack:** Arduino Uno, C++, Wokwi, Ultrasonic Sensor (HC-SR04), Stepper Motor (A4988).

-----

## 🛠️ Unified Technology Stack

| Discipline | Technologies Used |
| :--- | :--- |
| **Frontend Web** | React, Vite, Tailwind CSS, Radix UI |
| **Backend & Logic**| JavaScript (ES6+), REST APIs, TanStack Query |
| **AI Integration** | OpenAI/Gemini API Integration, Prompt Engineering |
| **Hardware & IoT** | Arduino Uno, C++, Wokwi Simulation, Sensors & Actuators |

-----

## 🎯 Key Achievements & Learnings

1.  **Full-Spectrum Engineering:** Successfully transitioned from building modern React interfaces to writing embedded C++ for microcontrollers within the same timeline.
2.  **Robust Logic Design:** Engineered systems with "graceful degradation"—specifically the Travel Planner's ability to provide fallback itineraries if the AI service is unreachable.
3.  **Simulation Precision:** Mastered the Wokwi environment to simulate real-world physical constraints, such as sensor latency and motor torque timing.

-----

## ⚙️ How to Navigate This Repository

1.  Clone the Repo
2.  **Explore Folders:** Each folder contains a standalone project. Read the internal `README.md` for specific circuit diagrams or setup steps.
3.  **Hardware Simulation:** For IoT projects, copy the code from the `.ino` files and the configuration from `diagram.json` into [Wokwi.com](https://www.google.com/search?q=https://wokwi.com) to see them in action.

-----
