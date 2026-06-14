const mongoose = require("mongoose");
mongoose.pluralize(null);
const loginSchema = new mongoose.Schema(
    {
        emailId: {
            type: String,
            required: true,
            unique:true

        },
        password: {
            type: String,
            required: true
        },
        typeOfUser: {
            type: String,
            required: true,
            enum:["admin","customer"]
        }
    },
    {
        timestamps: true
    }
);
// by default mongoose create collection name in lower case with plural form. 
let loginModel = mongoose.model("Login",loginSchema);
module.exports = loginModel;