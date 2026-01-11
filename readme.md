# 🟢 Cogniva
## Emotionally Intelligent Customer-Facing Chat Assistant

Cogniva is a customer-facing AI chat assistant designed to provide emotion-aware, context-sensitive, and adaptive conversations without requiring user login or signup.
It combines short-term memory, long-term user profiling, tone adaptation, and emotional intelligence to deliver natural, human-like support interactions.

## 📌 Project Definition
Cogniva is a modular, scalable chatbot system built for modern web applications where:

- Users interact anonymously (no authentication required)
- Conversations feel emotionally aware and natural
- Responses adapt over time based on user behavior
- The system can plug into any UGC or customer-facing platform

The project demonstrates how affective computing principles can be practically applied in real customer support systems using modern backend architecture.

## 🎯 Purpose & Goals

- Provide empathetic and adaptive AI responses
- Maintain conversational context and memory
- Match user tone (formal / informal)
- Support stateless frontends with persistent backend memory
- Demonstrate a clean, production-ready AI architecture
- Serve as a base for customer support, onboarding, or helpdesk systems

## ✨ Major Features

### 🧠 Emotional Intelligence
- Detects user emotional state (e.g., frustration, curiosity, gratitude)
- Adjusts response tone and structure accordingly
- Avoids robotic or repetitive phrasing

### 🗣️ Tone Adaptation
- Automatically switches between formal and informal responses
- Matches the user’s communication style dynamically

### 🕒 Short-Term Memory (Redis)
- Stores recent messages in a sliding window
- Preserves conversational context
- Auto-expires to prevent memory bloat

### 🗄️ Long-Term Memory (MongoDB)
- Stores user profile information
- Tracks emotional trends and tone preferences
- Enables response evolution over time

### 🧩 Modular Architecture
- Emotion detection, tone detection, memory, and LLM logic are separated
- Easy to replace or upgrade individual components
- Ready for scaling and production deployment

### 🔐 No Login / No Signup
- Frontend generates a persistent anonymous userId
- Backend uses this ID to maintain continuity
- Ideal for frictionless user experiences

### 🌐 Customer-Facing UI
- Clean, light teal themed interface
- ChatGPT-like layout
- Focused on readability and usability

## 🏗️ Architecture Overview

```text
Frontend (HTML/CSS/JS)
   ↓
Express API (/chat)
   ↓
Chat Service
 ├─ Emotion Detection
 ├─ Tone Detection
 ├─ Short-Term Memory (Redis)
 ├─ Long-Term Memory (MongoDB)
 ├─ Prompt Construction
 └─ Gemini LLM Response
```

### Memory Strategy

- **Redis** → Short-term conversational context (last N messages)
- **MongoDB** → Persistent user profile and emotional trends
- **LLM Context** → Combines system rules + emotional context + recent history

## 🧰 Tools & Technologies

### Backend
- Node.js
- Express.js
- Redis Cloud (short-term memory)
- MongoDB (long-term memory)
- Google Gemini API (LLM)
- dotenv (environment configuration)

### Frontend
- HTML
- CSS (custom, no framework)
- Vanilla JavaScript
- Fetch API

### AI & NLP
- Emotion detection logic
- Tone detection logic
- Prompt engineering
- Response formatting layer

## 🔑 Environment Variables Setup

Create a .env file in the backend root directory.

```env
# Server
PORT=5000

# Google Gemini API
GEMINI_API_KEY=your_google_gemini_api_key

# MongoDB
MONGO_URI=your_mongodb_connection_string

# Redis Cloud
REDIS_HOST=redis-xxxx.cloud.redislabs.com
REDIS_PORT=12901
REDIS_USERNAME=default
REDIS_PASSWORD=your_redis_password
```

### ⚠️ Important

- Never commit .env files
- Rotate credentials if exposed
- Redis Cloud often requires TLS (handled internally by the client)

## ▶️ Running the Project

### Backend
```bash
npm install
npm start
```

### Frontend

Simply open `index.html` in a browser or serve via a static server.

## 🧪 Testing

### API Testing (Postman)

**Endpoint:**
`POST /chat`

**Body:**
```json
{
  "userId": "test-user-123",
  "message": "I’m confused about how this works",
  "platform": "web"
}
```

**Expected Response:**
```json
{
  "reply": "empathetic, formatted response",
  "tone": "informal"
}
```

## 🚀 Scalability & Extensibility

- Plug into any frontend or UGC platform
- Easily replace Gemini with another LLM
- Add analytics, moderation, or streaming responses
- Ready for containerization and cloud deployment

## 📈 Future Enhancements

- Streaming responses (typing effect)
- Advanced emotion detection via LLM
- Multi-language emotion support
- Analytics dashboard
- Agent handoff to human support
- Dark/light theme toggle

## 🧠 Why This Project Matters

> Most chatbots respond to what users say.
> **Cogniva responds to how users feel.**

It demonstrates how emotion, memory, and tone can be combined into a real, usable customer support AI, not just a demo bot.

