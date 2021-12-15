const mongoose = require("mongoose");

const User = require("./user.model");

const cartSchema = new mongoose.Schema({

    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    carts: [
        { type: String, required: true }
    ]
}
, {
    versionKey: false,
    timestamps:true
})
module.exports = new mongoose.model("UserCart", cartSchema);