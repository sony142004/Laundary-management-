
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Define Order Routes
router.post('/orders', orderController.createOrder);          // Create Order
router.get('/orders', orderController.getOrders);            // Get all orders (supports filters)
router.put('/orders/:id/status', orderController.updateStatus); // Update Order Status
router.get('/dashboard', orderController.getDashboard);       // Dashboard Stats

module.exports = router;
