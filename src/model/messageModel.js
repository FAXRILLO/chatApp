const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
    file: {
      type: Object,
      default: "",
    },
    isRead: {
        type: Boolean,
        default: false
    }
  },
  { timeseries: true }
);

module.exports = mongoose.model("Message", messageSchema)