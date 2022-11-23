const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName:{
        type: String,
        required:"please enter product",
    },
    productPrice:{
        type: String,
        required:"please enter price",
    },
    productQty:{
        type:String,
        required: "please enter qty",
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
      },
      dateUpdated: {
        type: Date,
        default: Date.now(),
      },
});

module.exports = mongoose.model("Product", productSchema);