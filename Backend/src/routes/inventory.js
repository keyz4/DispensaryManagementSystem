const express = require('express');
const router = express.Router();
const Inventory = require("../models/InventorySchema.js");

// Middleware to parse JSON
router.use(express.json());

router.get('/', (req, res) => {
    res.send('This is the inventory router');
});

router.post('/update', async (req, res) => {
    try {
        const { MedicineName, Quantity } = req.body;

        // Validate input
        if (!MedicineName || Quantity == null) {
            return res.status(400).json({ error: "MedicineName and Quantity are required" });
        }

        // Create new inventory item
        const newInventoryItem = new Inventory({
            MedicineName,
            Quantity
        });

        // Save to database
        await newInventoryItem.save();

        // Send success response
        res.status(201).json({ message: "Medicine details added successfully", newInventoryItem });
        console.log("Meds updated successfully!")
    } catch (error) {
        console.error("Error adding medicine details:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
