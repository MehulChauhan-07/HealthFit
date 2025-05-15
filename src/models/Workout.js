const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  durationMin: {
    type: Number,
    required: true,
  },
  exercises: [
    {
      name: String,
      sets: Number,
      reps: Number,
      duration: Number,
      restTime: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
