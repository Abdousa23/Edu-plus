const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        },
    pic: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Chat", ChatSchema);