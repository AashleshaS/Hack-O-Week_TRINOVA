🚧 Forklift Safety Alert System using Ultrasonic Sensor

##🔗 Project Overview

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

### 🔄 System Logic Flowchart

```mermaid
graph TD
    %% Styling
    classDef startEnd fill:#2c3e50,stroke:#2c3e50,color:#fff,stroke-width:2px;
    classDef sensing fill:#ebf5fb,stroke:#2e86c1,color:#212f3d,stroke-width:1px;
    classDef decision fill:#fef9e7,stroke:#f1c40f,color:#7d6608,stroke-width:2px;
    classDef action fill:#fdedec,stroke:#e74c3c,color:#922b21,stroke-width:2px;
    classDef normal fill:#eafaf1,stroke:#27ae60,color:#145a32,stroke-width:1px;

    %% Workflow
    A([Start System]) --> B[Initialize Ultrasonic Sensor & Motors]
    B --> C[Emit Ultrasonic Pulse]
    C --> D[Measure Echo Return Time]
    D --> E[/Calculate Distance in cm/]
    
    E --> F{Is Distance <br/> <= 50cm?}

    %% Path: Object Detected
    F -- YES --> G[Trigger Piezo Buzzer Alert]
    G --> H[Emergency Stop: Halt Stepper Motor]
    H --> I[Log Serial: 'OBJECT DETECTED - HALTING']
    I --> C

    %% Path: Clear
    F -- NO --> J[Maintain/Resume Motor Rotation]
    J --> K[Deactivate Buzzer]
    K --> L[Log Serial: 'PATH CLEAR']
    L --> C

    %% Applying Classes
    class A startEnd;
    class B,C,D sensing;
    class E normal;
    class F decision;
    class G,H,I action;
    class J,K,L normal;
