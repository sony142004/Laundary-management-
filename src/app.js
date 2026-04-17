
const express = require('express');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Load Routes
app.use('/', orderRoutes);

// Simple root route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to AI-Powered Laundry Management API" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Try POST http://localhost:${PORT}/orders to create an order`);
});
