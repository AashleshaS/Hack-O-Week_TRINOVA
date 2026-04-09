# 🌏 AI Travel Planner

An **AI-powered travel planning web application** built with **React + Vite** that helps users discover destinations, generate personalized itineraries, and manage their trips in one place.

The system integrates **AI-based itinerary generation**, **authentication flow**, and **modular page routing** to create a seamless trip-planning experience.


## 📝 Project Overview

This platform acts as a **smart travel assistant** that allows users to:

* Explore cities and tourist destinations
* Generate **AI-driven travel itineraries**
* Plan and save trips
* View detailed trip itineraries
* Discover nearby locations and attractions

The app is structured around **user interactions, AI itinerary generation, and backend data management**, creating a complete travel planning ecosystem.

## 📊 Project Flowchart

Shows how users interact with the app, how the AI engine generates itineraries, and how data flows through the backend.

flowchart TD
    A[User Opens App] --> B{Authenticated?}

    B -->|No| C[Login / Signup]
    B -->|Yes| D[Dashboard]

    D --> E[Plan a Trip]
    E --> F[Enter Trip Details]

    F --> G[Generate Itinerary]

    G --> H{AI Available?}
    H -->|Yes| I[AI Generates Plan]
    H -->|No| J[Fallback Itinerary]

    I --> K[Show Itinerary]
    J --> K

    K --> L[Save Trip]
    L --> M[View in My Trips]

    D --> N[Explore Cities]
    N --> O[View Locations]

    %% Styling
    style A fill:#e3f2fd,stroke:#1e88e5,stroke-width:2px
    style D fill:#e8f5e9,stroke:#43a047,stroke-width:2px
    style E fill:#fff3e0,stroke:#fb8c00,stroke-width:2px
    style G fill:#ede7f6,stroke:#8e24aa,stroke-width:2px
    style K fill:#e0f7fa,stroke:#00acc1,stroke-width:2px
    style M fill:#fce4ec,stroke:#d81b60,stroke-width:2px


## 🧩 Core Architecture

**Key modules:**

* **App.jsx**

  * Root component wrapping the app with:

    * `AuthProvider` (authentication)
    * `QueryClientProvider` (state management)
    * `React Router`
  * Handles route rendering, authentication, and fallback pages.

* **pages.config.js**

  * Auto-generated page routing config
  * Main pages: `Dashboard`, `PlanTrip`, `MyTrips`, `TripDetail`, `ExploreLocations`, `Cities`, `CityDetail`

* **Layout.jsx**

  * Shared UI wrapper for all pages: header, sidebar, and consistent layout.


## 🤖 AI Itinerary Engine

Located in `src/lib/ai-planner.js`, this module **generates personalized trip plans** based on user input.

**Functions:**

1. `createItineraryPrompt(form)`

   * Builds AI prompt from trip details: destination, dates, budget, style, interests.

2. `generateAIItinerary(form)`

   * Sends prompt to AI API (`VITE_AI_ENDPOINT`)
   * Supports multiple response formats
   * Falls back to local itinerary if API fails.

3. `generateFallbackItinerary(form)`

   * Creates deterministic day-wise itinerary when AI fails.

**Helper:** `getTripDays(start,end)` calculates trip duration (default 3 days if invalid).


## 🧭 Main Features

* **PlanTrip.jsx**

  * Trip input form with destination, dates, budget, style, and interests
  * Triggers AI itinerary generation

* **MyTrips.jsx & TripDetail.jsx**

  * Save and view detailed trips

* **ExploreLocations.jsx, Cities.jsx, CityDetail.jsx**

  * Browse cities and nearby locations

* **UI Components** (`src/components/UI`)

  * Tailwind + Radix UI
  * Buttons, Cards, Modals, Toasts, etc.


## 🔐 Authentication & State

* **AuthContext.jsx**

  * Handles login state, loading, and error handling
  * Includes `navigateToLogin()` for routing

* **UserNotRegisteredError.jsx**

  * Displays error for non-registered users


## ⚙️ Technology Stack

| Layer            | Technology                                                     |
| ---------------- | -------------------------------------------------------------- |
| Frontend         | React + Vite                                                   |
| Routing          | React Router DOM                                               |
| State Management | TanStack Query                                                 |
| Styling          | Tailwind CSS                                                   |
| UI Components    | Radix UI primitives                                            |
| AI Integration   | External AI API                                                |
| Environment      | Vite ENV variables (`VITE_AI_ENDPOINT`, `VITE_OPENAI_API_KEY`) |


## 🔄 App Runtime Flow

1. App starts → `AuthProvider` validates user session
2. Routes are rendered if authentication is OK
3. User submits trip in PlanTrip → AI generates itinerary
4. If AI fails → fallback itinerary is generated
5. Trip saved → visible in MyTrips
6. User can browse cities, locations, and explore personalized recommendations


