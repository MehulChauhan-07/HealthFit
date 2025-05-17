const mongoose = require("mongoose");

const userWorkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  workout: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Workout",
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
    enum: ["assigned", "in_progress", "completed", "skipped"],
    default: "assigned",
  },
});

const UserWorkout = mongoose.model("UserWorkout", userWorkoutSchema);

module.exports = UserWorkout;
