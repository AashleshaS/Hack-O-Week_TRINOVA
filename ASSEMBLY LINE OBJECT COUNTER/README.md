🚧 Assembly Line Object Counter using Ultrasonic Sensor
🔗 Project Overview

This project simulates an industrial assembly line system that counts objects moving on a conveyor using an ultrasonic sensor. The system detects objects in real time and displays the total count on an LCD. It is implemented using Arduino and simulated on Wokwi.

🎯 Objectives

Detect objects passing on the assembly line

Count each object accurately

Display count on LCD screen

Prevent multiple counting of the same object

Simulate industrial automation system

🧰 Components Used

Arduino Uno

Ultrasonic Sensor (HC-SR04)

16x2 LCD Display (I2C)

Jumper Wires

⚙️ Working Principle

The ultrasonic sensor continuously measures the distance using sound waves. When an object comes within a predefined threshold distance (e.g., 10 cm), it is detected as a valid object.

If an object is detected:

The counter increases by 1
The updated count is displayed on the LCD

If no object is detected:

The system keeps monitoring continuously

A small delay is added to avoid counting the same object multiple times.

🔌 Circuit Connections

Ultrasonic Sensor (HC-SR04)

VCC → 5V

GND → GND

TRIG → Pin 9

ECHO → Pin 10

LCD Display (I2C)

VCC → 5V

GND → GND

SDA → A4

SCL → A5

🚀 Features

Real-time object detection

Accurate counting mechanism

Simple and efficient design

Easy simulation and implementation

Low-cost automation solution

🔮 Future Enhancements

Add buzzer alert when count reaches a limit

Add LED indicators for system status

Store data using EEPROM

IoT monitoring using Blynk or ThingSpeak

Conveyor belt speed control integration

📌 Conclusion

This project demonstrates a simple and effective object counting system for assembly lines using ultrasonic sensing. It helps automate counting processes in industries, reducing manual effort and improving accuracy. The system is cost-effective, easy to implement, and suitable for beginner-level automation projects.
