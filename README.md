# OCDetect - OCD Detection and Assessment Platform

A comprehensive full-stack application for detecting and assessing Obsessive-Compulsive Disorder (OCD) through intelligent questionnaires, real-time posture/blink detection, and machine learning predictions.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Machine Learning Models](#machine-learning-models)
- [Database Schema](#database-schema)
- [Components Overview](#components-overview)
- [Development](#development)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

OCDetect is an innovative platform designed to help users assess their OCD symptoms through:

1. **Interactive Questionnaires** - Comprehensive assessment forms collecting demographic and symptom data
2. **Machine Learning Predictions** - ML models that predict OCD severity and percentage scores
3. **Real-time Behavioral Analysis** - Computer vision-based detection of posture and blink patterns using MediaPipe
4. **Educational Resources** - Information about OCD, symptoms, and treatment options
5. **User Stories & Community** - Testimonials and shared experiences from users
6. **Result Tracking** - Persistent storage of assessment results with history

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14.2.8
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.4.13
- **State Management**: React hooks
- **Authentication**: Firebase 10.14.1
- **Real-time Video**: react-webcam 7.2.0
- **Icons**: react-icons 5.3.0
- **Charts**: recharts 2.13.0, react-chartjs-2 5.2.0
- **Calendar**: react-calendar 5.0.0
- **Notifications**: react-toastify 10.0.6

### Backend (Node.js/Express)
- **Server**: Express.js 4.21.1
- **Database**: MongoDB with Mongoose 8.7.1
- **Email**: Nodemailer 6.9.15
- **CORS**: cors 2.8.5
- **Body Parser**: body-parser 1.20.3
- **Environment**: dotenv 16.4.5
- **Development**: nodemon 3.1.7

### Machine Learning (Python)
- **Framework**: Flask 2.3.3
- **Computer Vision**: OpenCV 4.8.0.76, MediaPipe 0.10.18
- **ML Models**: scikit-learn 1.3.0, joblib 1.3.2
- **Data Processing**: pandas 2.1.0, numpy 1.25.2
- **Additional**: Werkzeug 2.3.7, Flask-CORS 4.0.0

## 📁 Repository Structure

```
OCDetect/monorepo/
├── backend/
│   └── python/
│       └── backend/
│           ├── app.py                 # Flask app entry point
│           ├── server.js              # Express.js server
│           ├── db.js                  # MongoDB connection
│           ├── package.json           # Node.js dependencies
│           ├── requirements.txt       # Python dependencies
│           ├── posture_detector.py   # Posture & blink detection
│           ├── train_and_save_model.py # Model training script
│           ├── train.py              # Training utilities
│           │
│           ├── api/
│           │   └── index.py          # Flask API endpoints
│           │
│           ├── model/
│           │   ├── model.py          # ML prediction functions
│           │   ├── models/           # Saved joblib models
│           │   │   ├── ocd_percentage_model.joblib
│           │   │   ├── ocd_severity_model.joblib
│           │   │   └── ocd_severity_label_encoder.joblib
│           │   └── utils/
│           │       ├── preprocess.py
│           │       └── preprocessing.py
│           │
│           ├── controllers/
│           │   └── resultController.js # Business logic
│           │
│           ├── models/
│           │   ├── Response.js       # Questionnaire responses
│           │   ├── Result.js         # Assessment results
│           │   ├── Story.js          # User stories
│           │   └── Therapy.js        # Therapy resources
│           │
│           ├── routes/
│           │   ├── responses.js      # Assessment routes
│           │   ├── resultRoutes.js   # Result storage routes
│           │   ├── stories.js        # Stories routes
│           │   ├── therapy.js        # Therapy routes
│           │   └── contactroute.js   # Contact form routes
│           │
│           └── __pycache__/
│
└── frontend/
    └── frontend/
        ├── package.json
        ├── next.config.mjs
        ├── tailwind.config.js
        ├── postcss.config.js
        ├── jsconfig.json
        ├── README.md
        ├── data.js                  # Testimonials/reviews data
        │
        ├── api/
        │   └── assessments.js
        │
        ├── lib/
        │   ├── firebaseAuth.js      # Firebase authentication
        │   └── firebaseconfig.js    # Firebase configuration
        │
        ├── src/
        │   ├── app/
        │   │   ├── layout.js
        │   │   ├── page.js          # Home page
        │   │   ├── globals.css
        │   │   │
        │   │   ├── assessments/     # Questionnaire page
        │   │   ├── authenticate/    # Login/signup
        │   │   ├── profile/         # User profile
        │   │   ├── questionnaire/   # OCD assessment
        │   │   ├── result/          # Results display
        │   │   ├── stories/         # User stories
        │   │   └── resources/       # Educational content
        │   │       ├── symptoms/
        │   │       ├── treatment/
        │   │       └── whatisocd/
        │   │
        │   └── components/
        │       ├── About.js
        │       ├── Auth.js
        │       ├── Contactus.js
        │       ├── DisplayResult.js
        │       ├── Faqs.js
        │       ├── Footer.js
        │       ├── GuideConnect.js
        │       ├── Hero.js
        │       ├── Navbar.js
        │       ├── Result.js
        │       ├── Story.js
        │       ├── Testimonialcard.js
        │       ├── Testimonials.js
        │       └── WebcamControl.js  # Real-time detection UI
```

## ✨ Features

### 1. **OCD Assessment Questionnaire**
- Personalized assessment form with multiple questions
- Collects demographic data (age)
- Captures symptom information:
  - Duration of symptoms (months)
  - Obsession type
  - Compulsion type
  - Depression diagnosis status
  - Anxiety diagnosis status

### 2. **Machine Learning Prediction**
- **Regression Model**: Predicts OCD percentage (0-100%)
- **Classification Model**: Predicts OCD severity (e.g., Mild, Moderate, Severe)
- Pre-trained models using scikit-learn
- Real-time prediction on form submission

### 3. **Posture & Blink Detection**
- Real-time webcam video processing using MediaPipe
- Detects and analyzes:
  - **Body Posture**: Shoulder and neck angles
  - **Blink Patterns**: Blink count and frequency
  - **Lighting Conditions**: Alerts for inadequate lighting
- Calibration feature for personalized thresholds
- Sound and desktop notifications for alerts
- Frame-by-frame analysis with smoothing

### 4. **Authentication System**
- Firebase-based user authentication
- Sign-up and login functionality
- Persistent user sessions

### 5. **Result Management**
- Store assessment results with timestamp
- Track multiple assessments per user
- Visualize results with charts and graphs
- Historical data access

### 6. **Educational Resources**
- What is OCD? - Comprehensive information
- Symptoms guide - Detailed symptom information
- Treatment options - Therapy and treatment methods
- FAQ section

### 7. **User Stories & Community**
- Community testimonials and reviews
- User success stories
- Therapy guide and connections

### 8. **Contact & Communication**
- Contact form with email notifications
- Email integration using Nodemailer
- User inquiry management

## 📋 Prerequisites

- **Node.js**: v18.x or higher
- **Python**: v3.8 or higher
- **MongoDB**: v5.0 or higher (local or cloud)
- **npm** or **yarn**: for package management
- **Firebase Account**: for authentication
- **Webcam**: for real-time detection features

## 🔧 Installation

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd monorepo
```

### Step 2: Backend Setup

#### Node.js Backend

```bash
cd backend/python/backend

# Install Node.js dependencies
npm install

# Create .env file
touch .env

# Add environment variables (see Configuration section)
```

#### Python Backend

```bash
# Make sure you're in backend/python/backend directory

# Create virtual environment (optional but recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt
```

### Step 3: Frontend Setup

```bash
cd frontend/frontend

# Install dependencies
npm install

# Create .env.local file
touch .env.local

# Add environment variables (see Configuration section)
```

## ⚙️ Configuration

### Backend Environment Variables (`.env`)

Create `.env` file in `backend/python/backend/`:

```env
# Server Configuration
PORT=7000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb://localhost:27017/ocdetect
# Or use MongoDB Atlas
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ocdetect

# Email Configuration (Nodemailer)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Flask Python Server
FLASK_PORT=5000
FLASK_HOST=http://localhost:5000
```

### Frontend Environment Variables (`.env.local`)

Create `.env.local` file in `frontend/frontend/`:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API Endpoints
NEXT_PUBLIC_API_URL=http://localhost:7000
NEXT_PUBLIC_PYTHON_API_URL=http://localhost:5000
```

## 🚀 Running the Application

### Start MongoDB

```bash
# Local MongoDB
mongod

# Or use MongoDB Atlas (cloud) - ensure MONGODB_URI is set correctly
```

### Start Backend Server

#### Terminal 1: Node.js Server

```bash
cd backend/python/backend
npm start
# or
node server.js

# Server will run on http://localhost:7000
```

#### Terminal 2: Python Flask Server

```bash
cd backend/python/backend
python app.py

# Flask server will run on http://localhost:5000
```

### Start Frontend

#### Terminal 3: Next.js Development Server

```bash
cd frontend/frontend
npm run dev

# Frontend will run on http://localhost:3000
```

### Access the Application

Open your browser and navigate to: `http://localhost:3000`

## 📡 API Documentation

### Assessment API Endpoints

#### GET `/api/responses`
Retrieve all assessments
```json
Response: {
  "assessments": [
    {
      "_id": "...",
      "email": "user@example.com",
      "answers": { ... },
      "timestamp": "2024-..."
    }
  ]
}
```

#### POST `/api/responses`
Submit a new assessment
```json
Request: {
  "email": "user@example.com",
  "answers": {
    "age": 28,
    "duration_symptoms": 24,
    "obsession_type": "contamination",
    "compulsion_type": "cleaning",
    "depression_diagnosis": 1,
    "anxiety_diagnosis": 1
  }
}

Response: {
  "success": true,
  "id": "..."
}
```

### Results API Endpoints

#### POST `/api/resultstorage`
Store assessment results
```json
Request: {
  "email": "user@example.com",
  "severity": "Moderate",
  "percentage": 65.4,
  "answers": { ... }
}

Response: {
  "success": true,
  "resultId": "..."
}
```

#### GET `/api/resultstorage/:email`
Get results for a user
```json
Response: {
  "results": [
    {
      "severity": "Moderate",
      "percentage": 65.4,
      "timestamp": "2024-...",
      "answers": { ... }
    }
  ]
}
```

### ML Prediction Endpoint (Python Flask)

#### POST `/predict`
Get OCD severity and percentage predictions
```json
Request: {
  "age": 28,
  "duration_symptoms": 24,
  "obsession_type": "contamination",
  "compulsion_type": "cleaning",
  "depression_diagnosis": 1,
  "anxiety_diagnosis": 1
}

Response: {
  "predicted_severity": "Moderate",
  "predicted_percentage": 65.4
}
```

### Stories API Endpoints

#### GET `/api/stories`
Retrieve user stories

#### POST `/api/stories`
Submit a new story

#### GET `/api/stories/:id`
Get a specific story

### Therapy API Endpoints

#### GET `/api/therapy`
Get therapy resources

#### POST `/api/therapy`
Add therapy resource

### Contact API Endpoints

#### POST `/api/contact`
Submit contact form
```json
Request: {
  "name": "John Doe",
  "email": "john@example.com",
  "message": "..."
}
```

## 🧠 Machine Learning Models

### Model Architecture

The OCD detection system uses two trained scikit-learn models:

#### 1. OCD Severity Classification Model
- **Input**: Preprocessed questionnaire answers (6 features)
- **Output**: OCD severity label (Mild, Moderate, Severe, etc.)
- **Type**: Classification
- **File**: `model/models/ocd_severity_model.joblib`
- **Encoder**: `model/models/ocd_severity_label_encoder.joblib`

#### 2. OCD Percentage Regression Model
- **Input**: Preprocessed questionnaire answers (6 features)
- **Output**: OCD score percentage (0-100%)
- **Type**: Regression
- **File**: `model/models/ocd_percentage_model.joblib`

### Feature Engineering

The preprocessing pipeline (`model/utils/preprocessing.py`) handles:
- Feature normalization/scaling
- Categorical encoding for obsession and compulsion types
- Handling missing values
- Output feature vector preparation

### Training Models

To retrain models with new data:

```bash
cd backend/python/backend

# Full training pipeline
python train_and_save_model.py

# Or use individual training script
python train.py
```

**Note:** Ensure you have training data in the expected format before retraining.

## 🗄️ Database Schema

### MongoDB Collections

#### Result Collection
```javascript
{
  _id: ObjectId,
  email: String,
  results: [
    {
      severity: String,        // e.g., "Moderate"
      percentage: Number,      // e.g., 65.4
      answers: {
        Age: Number,
        "Duration of Symptoms (months)": Number,
        "Obsession Type": String,
        "Compulsion Type": String,
        "Depression Diagnosis": Number,     // 0 or 1
        "Anxiety Diagnosis": Number         // 0 or 1
      },
      timestamp: Date
    }
  ]
}
```

#### Response Collection
```javascript
{
  _id: ObjectId,
  email: String,
  answers: { ... },
  timestamp: Date,
  status: String
}
```

#### Story Collection
```javascript
{
  _id: ObjectId,
  title: String,
  content: String,
  author: String,
  email: String,
  timestamp: Date,
  likes: Number,
  comments: [...]
}
```

#### Therapy Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  type: String,         // e.g., "CBT", "ERP"
  duration: String,
  resources: [String],
  timestamp: Date
}
```

## 🧩 Components Overview

### Frontend Components

#### Pages
- **Home** (`page.js`) - Landing page with Hero, About, FAQs
- **Questionnaire** (`questionnaire/page.js`) - OCD assessment form
- **Result** (`result/page.js`) - Display prediction results
- **Authenticate** (`authenticate/page.js`) - Login/signup
- **Profile** (`profile/page.js`) - User profile & history
- **Stories** (`stories/page.js`) - Community stories
- **Resources** (`resources/page.js`) - OCD info, symptoms, treatment

#### Reusable Components
- **Hero** - Landing section
- **Navbar** - Navigation menu
- **Auth** - Authentication handling
- **WebcamControl** - Real-time detection UI
- **DisplayResult** - Result visualization
- **Story** - Story card component
- **Testimonials** - Reviews carousel
- **Contactus** - Contact form
- **Faqs** - FAQ accordion

### Backend Controllers

#### resultController.js
- Store assessment results
- Retrieve user results
- Update/delete results
- Calculate statistics

## 🛠️ Development

### Project Commands

#### Frontend
```bash
cd frontend/frontend

npm run dev      # Development server
npm run build    # Production build
npm start        # Production server
npm run lint     # Linting
```

#### Backend (Node.js)
```bash
cd backend/python/backend

npm start        # Start server
npm run dev      # Development with nodemon
```

#### Python
```bash
cd backend/python/backend

python app.py    # Start Flask server
python train_and_save_model.py  # Retrain models
```

### Code Style & Best Practices

- **Frontend**: Use functional components and React hooks
- **Backend**: Follow Express.js conventions with middleware
- **Python**: Follow PEP 8 style guidelines
- **Database**: Use Mongoose schemas for validation
- **Security**: Always validate and sanitize user input

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error
```
Error: MongoDB connection error
```
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check `MONGODB_URI` in `.env`
- For MongoDB Atlas, verify network access and IP whitelist

#### 2. Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::7000
```
**Solution:**
```bash
# Kill process on port 7000 (macOS/Linux)
lsof -i :7000
kill -9 <PID>

# Or change PORT in .env
```

#### 3. Firebase Authentication Error
```
Error: Firebase initialization failed
```
**Solution:**
- Verify Firebase config in `lib/firebaseconfig.js`
- Check `NEXT_PUBLIC_FIREBASE_*` variables in `.env.local`
- Ensure Firebase project is active

#### 4. Python Module Not Found
```
ModuleNotFoundError: No module named 'mediapipe'
```
**Solution:**
```bash
pip install -r requirements.txt
# Or install individual package
pip install mediapipe
```

#### 5. Webcam Not Detected
```
cv2 error: (-5:Bad argument) in function 'VideoCapture'
```
**Solution:**
- Check camera permissions
- Ensure no other app is using the camera
- Try restarting the application
- Check camera device availability

#### 6. CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:**
- Verify `CORS_ORIGIN` in backend `.env`
- Check CORS middleware configuration in `server.js`
- Ensure frontend URL matches CORS_ORIGIN

### Debug Mode

#### Node.js Backend
```bash
DEBUG=* npm start
```

#### Python Flask
```bash
FLASK_ENV=development FLASK_DEBUG=1 python app.py
```

#### Frontend
```bash
npm run dev    # Next.js has built-in debug mode
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [MediaPipe Solutions](https://developers.google.com/mediapipe)
- [scikit-learn Documentation](https://scikit-learn.org/)
- [Firebase Documentation](https://firebase.google.com/docs)

## 📄 License

This project is provided as-is for educational and research purposes.

## 👥 Support & Contribution

For issues, feature requests, or contributions, please reach out through the contact form in the application.

---

**Last Updated**: March 2026
**Version**: 1.0.0
