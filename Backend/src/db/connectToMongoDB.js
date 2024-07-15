const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://bitmesradispensary:Ashutosh%40SamajSewa@bitmdispensary.uzqct2i.mongodb.net/?retryWrites=true&w=majority&appName=BITMDispensary"

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
}

module.exports = connectToMongoDB;
