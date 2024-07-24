const express = require('express');
const router = express.Router();
const Inventory = require("../models/InventorySchema.js");
const updateInventory = require("../controllers/inventory.update.js")

// Middleware to parse JSON
router.use(express.json());

router.get('/', (req, res) => {
    res.send('This is the inventory route');
});

router.post('/update', updateInventory);

router.get('/view', async (req, res) => {
    try{

    const medDetails = await Inventory.find();
    res.send(medDetails);
    res.status(200).json(inventoryItems);

    } catch(error) {

    console.error("Error fetching inventory items:", error);
    res.status(500).json({ error: "Server error" });

    }
});


module.exports = router;
