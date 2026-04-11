🚧 Forklift Safety Alert System using Ultrasonic Sensor

🔗 Project Overview

This project simulates a forklift safety system that detects obstacles using an ultrasonic sensor and alerts the operator using a buzzer. If the path is clear, a stepper motor drives the forklift forward. The system is implemented using Arduino and simulated on Wokwi.

🎯 Objectives

Detect obstacles using ultrasonic sensor

Alert operator using buzzer

Stop/allow movement based on distance

Simulate forklift movement using stepper motor

🧰 Components Used

Arduino Uno

Ultrasonic Sensor (HC-SR04)

Stepper Motor

A4988 Stepper Driver

Buzzer

Jumper Wires

⚙️ Working Principle

The ultrasonic sensor measures the distance to nearby objects using sound waves. When an object is detected within a threshold distance (50 cm), the system triggers a buzzer alert.

If no obstacle is detected:

The buzzer remains OFF

The stepper motor continues rotating (forklift moves forward)

If an obstacle is detected:

The buzzer turns ON

The forklift movement stops

🔌 Circuit Connections

Ultrasonic Sensor (HC-SR04)

VCC → 5V, GND → GND, TRIG → Pin 9, ECHO → Pin 10

Buzzer

Positive → Pin 8, Negative → GND

Stepper Motor (via A4988)

STEP → Pin 3, DIR → Pin 4, VMOT → External Power (if real hardware), GND → GND

🚀 Features

Real-time obstacle detection

Collision prevention mechanism

Automatic alert system

Simulated forklift movement

Low-cost and efficient safety solution

🔮 Future Enhancements

Add LED indicators (Red = danger, Green = safe)

Add LCD display for distance

IoT monitoring (ThingSpeak / Blynk)

Automatic braking system

AI-based object detection

📌 Conclusion

This project demonstrates an effective forklift safety system using ultrasonic sensing and real-time alerts. It helps prevent accidents by notifying operators when obstacles are too close and stopping movement accordingly.
