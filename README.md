# Pabuyan - Export/Import Management System (Japan ↔ Philippines)

## 📌 Project Overview
Pabuyan is a specialized system designed to streamline the proxy buying and shipping process from Japan to the Philippines. The platform bridges the gap between customers and the service owner, automating the creation of wishlists and order management to eliminate redundant manual communication.

### 💼 Business Problem Solved
Before this system, the client managed orders via manual messaging (SNS/WhatsApp), leading to high overhead, lost information, and communication fatigue. 
**Solution:** A web platform where customers build wishlists that are directly submitted to a structured admin dashboard.

---

## 🚀 Key Features

### For Customers (Zero Friction)
* **Guest-First Experience:** To maximize conversion and reduce complexity, customers can create and submit wishlists without a mandatory login/email. 
* **Smart Wishlist:** Intuitive UI for adding items and shipping details.

### For Admin (Control & Efficiency)
* **JWT-Protected Dashboard:** Secure administrative panel for order tracking and status management.
* **Direct Management:** Ability to edit, update, and process customer requests in real-time.
* **Automated Notifications:** Integration with Webhooks for instant email alerts upon new submissions.

---

## 🛠 Tech Stack & Architecture

### **Frontend**
* **React & TypeScript:** For a type-safe, maintainable codebase.
* **Tailwind CSS & Framer Motion:** High-fidelity UI with smooth animations for a premium user experience.
* **Figma:** Full UI/UX design process before implementation.

### **Backend**
* **Node.js & Express:** Scalable REST API architecture.
* **Prisma (ORM):** Type-safe database queries.
* **JWT (JSON Web Token):** Secure authentication for administrative access.
* **Webhook Integration:** Automated mail notification system.

### **DevOps & Infrastructure**
* **Docker:** Consistent development and production environments.
* **Vercel/Render:** CI/CD pipeline for high availability.
* **Transition:** Successfully migrated the system from a **Strapi MVP** to a custom-built production architecture for better performance and flexibility.

---

## 📈 Engineering Highlights

* **Architecture Migration:** Led the transition from a low-code MVP (Strapi) to a custom Node.js/Prisma backend to support specific business rules and improve long-term maintainability.
* **Authentication Strategy:** Implemented a "Hybrid Auth" model—JWT for administrative security while keeping the customer-side open to minimize friction and bounce rates.
* **Full-Cycle Ownership:** Responsible for the entire lifecycle, from Figma wireframing to Linux-based server maintenance.

---

## 🌐 Links & Contact
- **Live Demo:** [https://japan-pabuyan.vercel.app/]
- **Developer:** Wilean Takeshi Watanabe
