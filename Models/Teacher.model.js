const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  firstName:  {
    type: String,
    required: "Please Enter First Name",
  },

  lastName: {
    type: String,
    required: "Please Enter Last Name",
  },

  phone: {
    type: String,
    required: "Please Enter Phone Number",
  },

  email: {
    type: String,
    required: "Please Enter Email",
  },
  subject:{
  type: String,
  required:"please enter roll No"
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

module.exports = mongoose.model("Teacher", teacherSchema);