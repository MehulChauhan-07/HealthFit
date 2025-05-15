const mongoose = require("mongoose");

const motivationalMessageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdBy: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum: ["workout", "nutrition", "general", "achievement"],
    default: "general",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const MotivationalMessage = mongoose.model(
  "MotivationalMessage",
  motivationalMessageSchema
);

module.exports = MotivationalMessage;
