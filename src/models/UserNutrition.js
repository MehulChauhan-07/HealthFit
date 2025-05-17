const mongoose = require("mongoose");

const userNutritionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  nutrition: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Nutrition",
    required: true,
  },
  dateAssigned: {
    type: Date,
    default: Date.now,
  },
  dateCompleted: {
    type: Date,
  },
  notes: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ["assigned", "completed", "skipped"],
    default: "assigned",
  },
  servings: {
    type: Number,
    default: 1,
  },
});

const UserNutrition = mongoose.model("UserNutrition", userNutritionSchema);

module.exports = UserNutrition;
