const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dateRecorded: {
    type: Date,
    required: true,
    default: Date.now,
  },
  weight: {
    type: Number,
  },
  bodyFatPercentage: {
    type: Number,
  },
  measurements: {
    chest: Number,
    waist: Number,
    hips: Number,
    arms: Number,
    thighs: Number,
  },
  notes: {
    type: String,
    trim: true,
  },
  photos: [
    {
      url: String,
      date: Date,
    },
  ],
});

const Progress = mongoose.model("Progress", progressSchema);

module.exports = Progress;
