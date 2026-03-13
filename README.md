# 📚 Daily Learning Streak Tracker

A simple full-stack web application that helps students stay consistent with their studies by tracking daily learning streaks.

The app allows users to mark when they studied for the day and automatically calculates their learning streak. It also keeps track of total study days and displays study history.

This project demonstrates core **Full Stack Development skills using Next.js**.

---

# 🚀 Live Demo

Vercel Deployment:

```
https://vercel.com/tanoorkirans-projects/daily-learning-streak-tracker
```

---

# 📌 Project Features

### Dashboard

The home page displays:

* Current study streak
* Total number of study days
* Last studied date
* Button to mark **"I Studied Today"**

### Study Tracking

When the user clicks **I Studied Today**:

* Today's date is recorded
* The streak is updated
* Duplicate entries for the same day are prevented

If the user already marked the day, the system shows a message.

### Streak Logic

The streak follows these rules:

* If the user studied yesterday and today → streak increases
* If a day is missed → streak resets to 1

Example:

```
10 March → Studied
11 March → Studied
12 March → Studied

Streak = 3
```

If the user skips **13 March** and studies on **14 March**, the streak resets:

```
Streak = 1
```

### Study History

A separate page displays all study dates in descending order (newest first).

Example:

```
14 March 2026
12 March 2026
11 March 2026
10 March 2026
```

### Streak Calendar

A visual **30-day streak calendar** displays study activity similar to a contribution graph.

* 🟩 Green → Studied
* ⬜ Gray → Missed

---

# 🛠 Tech Stack

Frontend and Backend are built using **Next.js (App Router)**.

Main technologies used:

* **Next.js**
* **TypeScript**
* **Tailwind CSS**
* **Next.js API Routes**
* **Local Storage / In-Memory Data**
* **Vercel Deployment**

---

# 📂 Project Structure

```
app
 ├ api
 │   ├ study
 │   ├ streak
 │   ├ history
 │
 ├ history
 │   └ page.tsx
 │
 ├ page.tsx

components
 ├ StudyButton.tsx
 ├ StreakCalendar.tsx

lib
 ├ streakLogic.ts
```

---

# ⚙️ API Endpoints

### POST /api/study

Marks today's study.

```
POST /api/study
```

Response:

```
{
  message: "Study recorded successfully"
}
```

---

### GET /api/streak

Returns streak information.

```
GET /api/streak
```

Response:

```
{
  currentStreak: number,
  totalDays: number,
  lastStudyDate: string
}
```

---

### GET /api/history

Returns list of study dates.

```
GET /api/history
```

Response:

```
[
 "2026-03-14",
 "2026-03-12",
 "2026-03-11"
]
```

---

# 🧠 Business Rules

The application enforces the following rules:

1. Users cannot mark study twice in one day.
2. Streak increases only if the previous day was studied.
3. If a day is skipped, the streak resets.
4. Study history stores all study dates.

---

# 🖥 Local Setup

Clone the repository:

```
git clone https://github.com/yourusername/daily-learning-streak-tracker
```

Go to project folder:

```
cd daily-learning-streak-tracker
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

# 🌐 Deployment

This project is deployed on **Vercel**.

Steps used:

1. Push code to GitHub
2. Connect GitHub repository to Vercel
3. Deploy application
4. Share live deployment link

---

# 🎯 Project Goal

The goal of this project is to demonstrate:

* Full stack development with Next.js
* API route implementation
* Streak tracking logic
* Clean UI with Tailwind CSS
* Simple but functional application deployment

---

# 👨‍💻 Author

**Kiran Tanoor**

GitHub:

```
https://github.com/tanoorkiran
```

---

⭐ If you like this project, feel free to give it a star!
