const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dateEarned: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    enum: ["workout", "nutrition", "progress", "streak", "milestone"],
    required: true,
  },
  icon: {
    type: String,
  },
  points: {
    type: Number,
    default: 0,
  },
});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;
