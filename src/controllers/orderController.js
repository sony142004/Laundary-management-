
const orders = require('../data/mockDb');

/**
 * Controller for handling Laundry Orders
 */
const orderController = {
    // 1. Create a new order
    createOrder: (req, res) => {
        try {
            const { customerName, phone, items } = req.body;

            // Basic Validation
            if (!customerName || !phone || !items || !Array.isArray(items)) {
                return res.status(400).json({ error: "Missing required fields: customerName, phone, and items (array)" });
            }

            // Calculate totalAmount
            let totalAmount = 0;
            items.forEach(item => {
                totalAmount += (item.price * item.quantity);
            });

            // Estimated Delivery: 2 days from now
            const estimatedDelivery = new Date();
            estimatedDelivery.setDate(estimatedDelivery.getDate() + 2);

            // Create Order Object
            const newOrder = {
                id: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
                customerName,
                phone,
                items,
                totalAmount,
                status: "RECEIVED",
                createdAt: new Date().toISOString(),
                estimatedDelivery: estimatedDelivery.toISOString()
            };

            orders.push(newOrder);

            res.status(201).json({
                orderId: newOrder.id,
                totalAmount: newOrder.totalAmount,
                message: "Order created successfully!"
            });
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    // 2. Get all orders with filters
    getOrders: (req, res) => {
        const { status, customerName, phone } = req.query;
        let filteredOrders = [...orders];

        if (status) {
            filteredOrders = filteredOrders.filter(o => o.status === status.toUpperCase());
        }
        if (customerName) {
            filteredOrders = filteredOrders.filter(o => o.customerName.toLowerCase().includes(customerName.toLowerCase()));
        }
        if (phone) {
            filteredOrders = filteredOrders.filter(o => o.phone.includes(phone));
        }

        res.json(filteredOrders);
    },

    // 3. Update Order Status
    updateStatus: (req, res) => {
        const { id } = req.params;
        const { status } = req.body;

        const allowedStatuses = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];
        
        if (!status || !allowedStatuses.includes(status.toUpperCase())) {
            return res.status(400).json({ 
                error: `Invalid status. Allowed values: ${allowedStatuses.join(", ")}` 
            });
        }

        const orderIndex = orders.findIndex(o => o.id === id);
        if (orderIndex === -1) {
            return res.status(404).json({ error: "Order not found" });
        }

        orders[orderIndex].status = status.toUpperCase();
        
        res.json({
            message: "Status updated successfully",
            updatedOrder: orders[orderIndex]
        });
    },

    // 4. Dashboard Analytics
    getDashboard: (req, res) => {
        const totalOrders = orders.length;
        const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
        
        const countsByStatus = {
            RECEIVED: 0,
            PROCESSING: 0,
            READY: 0,
            DELIVERED: 0
        };

        orders.forEach(order => {
            if (countsByStatus.hasOwnProperty(order.status)) {
                countsByStatus[order.status]++;
            }
        });

        res.json({
            totalOrders,
            totalRevenue,
            countsByStatus
        });
    }
};

module.exports = orderController;
