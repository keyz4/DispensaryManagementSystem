const mongoose = require("mongoose");
const { Schema } = mongoose;

const inventorySchema = new Schema({
    MedicineName: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity cannot be negative'],
    }
}, {timestamps: true});

const Inventory = new mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;