const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    firstName: {
      type: String, required: true
    },
    lastName: {
      type: String, required: true
    },
    email: {
      type: String, required: true
    },
    phone: {
      type: Number, required: true
    },
    zipcode: {
      type: Number, required: true
    },
    address: {
      type: String, required: true
    },
    message: {
      type: String, required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("details", customerSchema);
