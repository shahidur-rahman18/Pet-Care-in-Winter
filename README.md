# 🐾 Pet Cares – Winter Companion for Your Furry Friends

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=netlify)](https://pets-care-winter.netlify.app/)

---

## 💡 Project Overview

**Pet Cares** is a cozy, winter-themed platform designed to help pet owners ensure their furry friends stay warm, safe, and healthy during the cold season. Users can explore **local pet care services, winter pet clothing, grooming options**, and expert tips — all in one friendly and intuitive interface.

This single-page application (SPA) emphasizes **minimalist design, smooth UI/UX, responsiveness**, and seamless navigation for an enjoyable user experience.

---

## 🎯 Live Project

🔗 [Visit the Live Site](https://pets-care-winter.netlify.app/)

---

## 🛠 Key Features

- **Responsive Layout:** Works perfectly on mobile, tablet, and desktop  
- **SPA Navigation:** Route-based content with persistent Navbar & Footer  
- **Winter Care Services:** Browse curated winter services for pets from JSON data  
- **Service Details Page:** Protected route for logged-in users with full service info  
- **Booking Form:** Submit requests for services (client-side only, with success toast)  
- **Authentication:**  
  - Signup & Login forms  
  - Google social login  
  - Password validation and toggle visibility  
  - Forgot password with email redirect  
- **My Profile:** View & update your profile (Name, Email, Image)  
- **Extra Homepage Section:** Additional winter pet care tips / recommendations  
- **Animations:** Subtle animations using **AOS, Animate.css, React-Spring, Swiper.js**  
- **Toast Notifications:** Success & error alerts for user actions  

---

## 📸 Screenshots

### Home Page
![Home](https://i.ibb.co.com/tPCnkr8L/Screenshot-2025-11-19-080924.png)

### Popular Winter Services
![Services](https://i.ibb.co.com/ksZFGGyq/Screenshot-2025-11-19-081145.png))

### Service Details (Protected)
![Service Details](https://i.ibb.co.com/hxCDd3tF/Screenshot-2025-11-19-081257.png)

### Authentication Pages
![Login & Signup](https://i.ibb.co.com/6cmhSD4d/Screenshot-2025-11-19-081457.png)


---

## 🛠 Tech Stack

- **Frontend:** React.js, HTML5, CSS3, JavaScript  
- **Styling & UI Components:** Tailwind CSS, DaisyUI, Swiper.js  
- **Animations:** AOS, Animate.css, React-Spring  
- **Authentication & Backend Services:** Firebase Authentication  
- **Hosting:** Netlify  

---

## 📂 JSON Data

Sample structure for winter pet care services:

```json
[
  {
    "serviceId": 1,
    "serviceName": "Winter Coat Fitting for Dogs",
    "providerName": "PawCare Studio",
    "providerEmail": "info@pawcare.com",
    "price": 25,
    "rating": 4.9,
    "slotsAvailable": 4,
    "description": "Custom coat fitting and warm outfit options to keep your dog comfortable in the cold.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Clothing"
  }
]
