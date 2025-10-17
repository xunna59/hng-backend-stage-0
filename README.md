# 🚀 Stage 0: Dynamic Profile Endpoint (HNG Backend Track)

A simple RESTful API built with **Node.js/Express** that returns dynamic profile information and a random cat fact fetched from the **Cat Facts API**.

---

## 📍 Endpoint

**GET** `/me`

### ✅ Example Response
```json
{
  "status": "success",
  "user": {
    "email": "your@email.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T12:34:56.789Z",
  "fact": "Cats sleep 70% of their lives."
}

### Local Setup
1. Clone the Repository
git clone https://github.com/xunna59/hng-backend-stage-0.git
cd hng-backend-stage-0

2. Install Dependencies
npm install

3. Run the App
npm start

5. Test the Endpoint
Visit:
http://127.0.0.1:3000/me
You should get a JSON response similar to:
{
  "status": "success",
  "user": {
    "email": "you@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T09:45:12.456Z",
  "fact": "Cats purr at around 26 cycles per second."
}

### Live URL

https://web-production-84fb5.up.railway.app/me
