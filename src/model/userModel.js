const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 100,
      enum: [100, 101], // 100-user, 101-admin
    },
    profilePicture: {
      type: Object,
      default: "",
    },
    coverPicture: {
      type: Object,
      default: "",
    },
    about: String,
    country: String,
    liveIn: String,
    works: String,
    relationship: String,
  },
  { timeseries: true }
);

module.exports = mongoose.model("Users", userSchema)