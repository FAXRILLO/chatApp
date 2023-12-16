const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("Chat", chatSchema)