const mongoose = require("mongoose");

const nutritionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  mealType: {
    type: String,
    enum: ["breakfast", "lunch", "dinner", "snack"],
    required: true,
  },
  ingredients: [
    {
      name: String,
      amount: Number,
      unit: String,
    },
  ],
});

const Nutrition = mongoose.model("Nutrition", nutritionSchema);

module.exports = Nutrition;
