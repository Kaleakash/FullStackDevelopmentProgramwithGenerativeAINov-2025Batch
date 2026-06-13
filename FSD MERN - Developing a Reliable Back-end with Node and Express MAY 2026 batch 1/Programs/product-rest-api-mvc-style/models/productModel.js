const mongoose = require("mongoose");
mongoose.pluralize(null);
const productSchema = new mongoose.Schema(
    {
        pname: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },

        quantity: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);
// by default mongoose create collection name in lower case with plural form. 
let productModel = mongoose.model("Product",productSchema);
module.exports = productModel;