const mongoose = require("mongoose");
let URL = "mongodb://127.0.0.1:27017/product_express_db"
const connectDB = async () => {
    try {
        await mongoose.connect(URL);

        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;