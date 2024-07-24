const Inventory = require("../models/InventorySchema.js");

const updateInventory = async (req, res) => {
    try {
        const { MedicineName, Quantity } = req.body;

        if (!MedicineName || Quantity == null) {
            return res.status(400).json({ error: "MedicineName and Quantity are required" });
        }

        const medicineNameRegex = new RegExp(`^${MedicineName}$`, 'i');


        let inventoryItem = await Inventory.findOne({ MedicineName: medicineNameRegex });

        if (inventoryItem) {
 
            inventoryItem.Quantity += Quantity;
        } else {

            inventoryItem = new Inventory({
                MedicineName,
                Quantity
            });
        }


        await inventoryItem.save();


        res.status(201).json({ message: "Medicine details added/updated successfully", inventoryItem });
        console.log("Meds updated successfully!");
    } catch (error) {
        console.error("Error adding/updating medicine details:", error);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = updateInventory;
