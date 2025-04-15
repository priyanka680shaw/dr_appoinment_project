# 🩺 Doctor Appointment Booking App

A responsive and user-friendly Doctor Appointment Booking web app built using **Next.js**, **React.js**, **TailwindCSS**, and **Redux Toolkit**. It allows users to explore doctors, book appointments, view them in a calendar, and cancel bookings — all with persistent data using **LocalStorage**.

---

## 🔗 Live Project

👉 [Click here to visit the live app](https://your-live-project-link.netlify.app)  
_(Replace the link above with your actual deployed Netlify URL)_

---

## 🚀 Tech Stack

- **Next.js** (React Framework)
- **React.js**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Big Calendar**
- **Lucide Icons** and **React Icons**
- **shadcn/ui**
- **React Carousel**
- **React Toastify**
- **UUID**
- **Next.js `Image` & `Link`**
- **React Hooks**

---

## 🧠 Features

### 🏠 Home Page
- Hero section with search functionality
- Search doctors by name or specialization
- Doctor cards with appointment buttons
- Testimonial section
- Calendar integration to show booked appointments

### 🔍 Explore Page
- View detailed profile of each doctor
- Book appointment from profile directly

### 📞 Dr. Calls (Appointments Page)
- View all booked appointments
- Cancel button available to remove booking
- Prevents duplicate appointments (only 1 per doctor)
- Toast popup notifications for success/cancel actions

### 🌗 Dark & Light Mode
- Toggle between light and dark themes

---

## 💾 Data Handling

- **LocalStorage**:
  - Stores doctor data and calendar events (appointments)
- **UUID**:
  - Used for unique appointment IDs
- **Redux Toolkit**:
  - Global state management for appointments and themes

---

## 📂 Folder Structure (Simplified)

/components ├── CalendarView.jsx ├── DoctorCard.jsx ├── AppointmentModal.jsx └── Header/Footer.jsx

/pages ├── index.js # Home Page ├── explore.js # Explore Doctors ├── dr-calls.js # Appointments Page └── contact.js # Contact Page

---

## 🧪 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/priyanka680shaw/doctor-booking-app.git

# Navigate to the project directory
cd doctor-booking-app

# Install dependencies
npm install

# Start the development server
npm run dev
👩‍💻 Author
Priyanka Shaw
📧 priyankashaw680@gmail.com
🌐 LinkedIn Profile: www.linkedin.com/in/priyanka-shaw-658b43242
