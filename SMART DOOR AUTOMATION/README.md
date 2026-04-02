PIR Motion-Based Automatic Door System

📌 Project Overview

This project demonstrates an automatic door control system using a PIR motion sensor, servo motor, and LED indicator. The system is simulated using the Wokwi platform, which allows real-time testing of embedded systems without physical hardware. The system detects human motion and automatically opens the door using a servo motor. A red LED indicates the door status, and all events are logged using the Serial Monitor.

🎯 Objectives

Detect human motion using PIR sensor

Automate door opening and closing

Provide visual indication using LED

Log system activity in simulation

🧰 Components Used

Arduino Uno,

PIR Motion Sensor (HC-SR501),

Servo Motor (SG90),

Red LED,

220Ω Resistor and

Jumper Wires

⚙️ Working Principle

The PIR (Passive Infrared) sensor detects motion by sensing changes in infrared radiation emitted by humans. When motion is detected, the sensor outputs a HIGH signal to the Arduino. The Arduino processes this signal and performs the following actions:

Rotates the servo motor to open the door,

Turns ON the red LED to indicate door is open,

Waits for a few seconds,

Closes the door and turns OFF the LED,

If no motion is detected, the door remains closed.

🔌 Circuit Connections

PIR Sensor

VCC → 5V, GND → GND, OUT → Digital Pin D2

Servo Motor

VCC → 5V, GND → GND, Signal → Digital Pin D9

LED

Anode → Digital Pin D7, Cathode → Resistor → GND

🔄 System Flow

Motion Detected (PIR)

↓

Arduino Receives Signal

↓

Servo Rotates → Door Opens

↓

LED Turns ON

↓

Delay

↓

Servo Returns → Door Closes

↓

LED Turns OFF

🚀 Features

Fully automated door system

Motion-based activation (energy efficient)

Visual indication using LED

Real-time logging via Serial Monitor

No hardware required (simulation-based)

🔮 Future Enhancements

IoT integration (ThingSpeak / Blynk)

Face recognition system

RFID-based access control

Auto-close based on continuous motion detection

Mobile notification system

📌 Conclusion

This project successfully demonstrates a smart door automation system using a PIR sensor and servo motor. It ensures that the door operates only when motion is detected, making it efficient and suitable for real-world automation applications.
