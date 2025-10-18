# HNG Stage 0 - Profile API

A RESTful API that returns profile information along with dynamic cat facts from an external API.

## 🚀 Live Demo

**API Endpoint:** (https://hng-stage-0-profile-api-production-a88f.up.railway.app/me)

## 📋 Features

- Returns user profile information (name, email, stack)
- Fetches dynamic cat facts from Cat Facts API
- ISO 8601 formatted timestamps
- Proper error handling
- CORS enabled

## 🛠️ Tech Stack

- **Runtime:** Node.js v22.14.0
- **Framework:** Express.js
- **External API:** Cat Facts API (https://catfact.ninja/fact)
- **Deployment:** [Railway]

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Local Setup

1. **Clone the repository**
```bash
   git clone [your-repo-url]
   cd HNG-stage-0
```

2. **Install dependencies**
```bash
   npm install
```

3. **Create `.env` file**
   
   Copy the example file and add your details:
```bash
   cp .env.example .env
```
   
   Then edit `.env` with your actual values:
```env
   PORT=5000
   USER_EMAIL=youremail@example.com
   USER_NAME=Your Full Name
   USER_STACK=Node.js/Express

4. **Run the development server**
```bash
   npm run dev
```

5. **Test the API**
```
   http://localhost:5000/me
```

## 📡 API Endpoints

### Get Profile
```http
GET /me
```

**Response:**
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T04:32:46.830Z",
  "fact": "Cats sleep 70% of their lives."
}
```

Status Codes:
- `200 OK` - Successful response
- `500 Internal Server Error` - Failed to fetch data

### Health Check
  http
GET /check


**Response:**
json
{
  "message": "API is up and running!"
}

## 📁 Project Structure
```
HNG-stage-0/
├── src/
│   ├── controllers/
│   │   └── profileController.js    # Request handling logic
│   ├── routes/
│   │   └── profile.js              # Route definitions
│   ├── services/
│   │   └── catFactService.js       # External API integration
│   └── app.js                      # Express app configuration
├── index.js                        # Server entry point
├── .env                            # Environment variables (pushed to .gitignore)
├── .env.example                    # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `USER_EMAIL` | Your email address | `user@example.com` |
| `USER_NAME` | Your full name | `John Doe` |
| `USER_STACK` | Your tech stack | `Node.js/Express` |

## 🚦 Error Handling

The API includes comprehensive error handling:
- Graceful fallbacks for external API failures
- Proper HTTP status codes
- Descriptive error messages
- Global exception handlers

## 🧪 Testing

### Manual Testing
```bash
# Test the main endpoint
curl http://localhost:5000/me

# Test health check
curl http://localhost:5000/check
```

### Verify Dynamic Data
- Refresh `/me` multiple times - timestamps and cat facts should change
- Check CORS headers in browser dev tools

## 📝 Scripts
```json
{
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## 🤝 Contributing

This is a personal project for HNG Internship Stage 0.

## 📄 License

ISC

## 👤 Author

**[Godly Patrick Udoh]**
- Email: [Udohgary1999@gmail.com]
- LinkedIn: [(http://www.linkedin.com/in/godlypatrickudoh)]
- GitHub: [@GodlyPatrick](https://github.com/GodlyPatrick)

## 🎯 HNG Internship

This project is part of the [HNG Internship](https://hng.tech/internship) program.

Learn more about HNG:
- [HNG Internship](https://hng.tech/internship)
- [HNG Premium](https://hng.tech/premium)

## 🙏 Acknowledgments

- Cat Facts API for providing the dynamic cat facts
- HNG Internship for the learning opportunity
- Express.js community for excellent documentation

---

**Built with ❤️ during HNG13 Internship**