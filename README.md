# Laundra AI – Order Management Dashboard

Laundra AI is a modern, AI-assisted Laundry Order Management System designed for dry cleaning businesses to streamline their operations. The platform enables store owners to manage the entire order lifecycle—from creation to delivery—with real-time analytics and a premium SaaS interface.

## 📄 Project Overview
The system provides a centralized dashboard to track laundry orders, monitor revenue, and manage customer communications. It simplifies complex billing by automatically calculating order totals based on items and provides AI-estimated delivery dates to keep customers informed.

## ✨ Features Implemented
- **Automated Billing**: Automatically calculates `totalAmount` during order creation.
- **Smart Order Tracking**: Manage orders through four stages: `RECEIVED`, `PROCESSING`, `READY`, and `DELIVERED`.
- **SaaS Dashboard**: Real-time analytics showing total orders, revenue, and status-wise breakdowns.
- **Deep Search & Filters**: Quickly find orders by customer name, phone number, or current status.
- **AI-Estimated Delivery**: Automatically predicts delivery dates (2-day standard turnaround).
- **Responsive UI**: A premium dark-mode interface inspired by Linear and Stripe, fully optimized for mobile and desktop.

## 🚀 Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (Node Package Manager)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/yourusername/laundry-management-system.git
cd laundry-management-system
npm install
```

### 3. Run the Application
Start the server:
```bash
npm start
```
The application will launch at **`http://localhost:3000`**.

## 🔌 API Endpoints

### 1. Create Order
- **POST** `/orders`
- **Request Body**:
```json
{
  "customerName": "Sowmya",
  "phone": "98138277474",
  "items": [{ "name": "Laundry Bundle", "quantity": 1, "price": 150 }]
}
```
- **Response**: `{ "orderId": "ORD-123...", "totalAmount": 150, "message": "..." }`

### 2. Get All Orders (With Filters)
- **GET** `/orders?status=RECEIVED&customerName=Sowmya`
- **Response**: Returns an array of filtered order objects.

### 3. Update Order Status
- **PUT** `/orders/:id/status`
- **Request Body**: `{ "status": "READY" }`

### 4. Dashboard Stats
- **GET** `/dashboard`
- **Response**: `{ "totalOrders": 10, "totalRevenue": 1500, "countsByStatus": { ... } }`

## 🤖 AI Usage Report
This project was developed with significant assistance from **Antigravity AI (Google DeepMind)**. 

### Sample Prompts Used:
- *"Build a backend REST API with in-memory storage for laundry orders using Express."*
- *"Improve the UI to look like a modern SaaS dashboard (Stripe/Linear style) with Tailwind CSS."*
- *"Add a filtering system for customer names and status badges."*

### How AI Helped:
- **Backend Logic**: Rapidly scaffolded the Express routes and controller structure.
- **UI/UX Design**: AI generated the CSS/Tailwind configuration for the "glassmorphism" effect and responsive table layout.
- **Debugging**: Helped resolve port conflict issues and PowerShell execution policy errors during setup.

### Issues & Fixes:
- **Issue**: Initial AI-generated code used `PROCESS` and `DONE` as status names, which were inconsistent with the backend requirements.
- **Fix**: Manually refactored the status mapping to `PROCESSING` and `DELIVERED` to ensure full end-to-end compatibility.

## ⚖️ Tradeoffs & Decisions
- **In-Memory Storage**: Decided to use a simple JS array instead of MongoDB for this version to ensure zero-config setup for evaluators.
- **Vanilla JS Frontend**: Opted for Vanilla JS with Tailwind CDN rather than React to minimize build-time complexity while still achieving a high-end visual result.
- **Scope**: Focus was placed on the core "Order Flow" and "Analytics" rather than a full Auth system due to time constraints for the initial MVP.

## 🔮 Future Improvements
- **Persistent Database**: Integration with MongoDB/PostgreSQL for data persistence.
- **User Authentication**: Secure login for store staff and managers.
- **SMS Notifications**: Automated status updates via Twilio for customers.
- **Advanced Insights**: Weekly/Monthly revenue trends and AI-powered demand forecasting.

## 📸 Demo
### Dashboard Overview
![Laundra AI Dashboard](public/screenshot.png) *(Replace with actual image link)*

---

## 🏛 Conclusion
Building **Laundra AI** provided deep insights into designing scalable REST APIs and modern "Dark Mode" UI patterns. The project successfully demonstrates how AI can accelerate full-stack development by handling boilerplate and complex styling, allowing the developer to focus on business logic and overall UX flow.
