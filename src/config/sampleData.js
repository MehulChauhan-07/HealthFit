const User = require("../models/User");
const Workout = require("../models/Workout");
const Nutrition = require("../models/Nutrition");
const Progress = require("../models/Progress");
const UserWorkout = require("../models/UserWorkout");
const UserNutrition = require("../models/UserNutrition");
const Achievement = require("../models/Achievement");
const MotivationalMessage = require("../models/MotivationalMessage");

const sampleData = {
  users: [
    {
      fullName: "John Doe",
      email: "john@example.com",
      password: "password123",
      gender: "male",
      dob: "1990-01-15",
      fitnessGoals: "Build muscle and improve overall fitness",
      role: "user",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      password: "password123",
      gender: "female",
      dob: "1992-05-20",
      fitnessGoals: "Lose weight and improve cardiovascular health",
      role: "user",
    },
    {
      fullName: "Admin User",
      email: "admin@example.com",
      password: "admin123",
      gender: "male",
      dob: "1985-08-10",
      fitnessGoals: "Maintain fitness and help others achieve their goals",
      role: "admin",
    },
  ],

  workouts: [
    {
      title: "Full Body Strength",
      description: "Complete full body workout focusing on major muscle groups",
      duration: 60,
      difficulty: "intermediate",
      category: "strength",
      exercises: [
        { name: "Squats", sets: 3, reps: 12, rest: 60 },
        { name: "Push-ups", sets: 3, reps: 15, rest: 45 },
        { name: "Deadlifts", sets: 3, reps: 10, rest: 90 },
        { name: "Pull-ups", sets: 3, reps: 8, rest: 60 },
      ],
    },
    {
      title: "HIIT Cardio",
      description: "High-intensity interval training for maximum calorie burn",
      duration: 30,
      difficulty: "advanced",
      category: "cardio",
      exercises: [
        { name: "Burpees", sets: 4, reps: 15, rest: 30 },
        { name: "Mountain Climbers", sets: 4, reps: 20, rest: 30 },
        { name: "Jump Squats", sets: 4, reps: 15, rest: 30 },
        { name: "High Knees", sets: 4, reps: 30, rest: 30 },
      ],
    },
    {
      title: "Yoga Flow",
      description: "Relaxing yoga session for flexibility and mindfulness",
      duration: 45,
      difficulty: "beginner",
      category: "flexibility",
      exercises: [
        { name: "Sun Salutation", sets: 3, reps: 1, rest: 30 },
        { name: "Warrior Poses", sets: 2, reps: 1, rest: 30 },
        { name: "Tree Pose", sets: 2, reps: 1, rest: 30 },
        { name: "Child's Pose", sets: 1, reps: 1, rest: 60 },
      ],
    },
  ],

  nutritionPlans: [
    {
      title: "High Protein Diet",
      description: "Diet plan focused on muscle building and recovery",
      calories: 2500,
      macros: {
        protein: 180,
        carbs: 250,
        fats: 83,
      },
      meals: [
        {
          name: "Breakfast",
          foods: [
            {
              name: "Oatmeal with Protein",
              calories: 400,
              protein: 30,
              carbs: 45,
              fats: 10,
            },
            {
              name: "Greek Yogurt",
              calories: 150,
              protein: 15,
              carbs: 8,
              fats: 5,
            },
          ],
        },
        {
          name: "Lunch",
          foods: [
            {
              name: "Grilled Chicken Breast",
              calories: 300,
              protein: 45,
              carbs: 0,
              fats: 15,
            },
            {
              name: "Brown Rice",
              calories: 200,
              protein: 5,
              carbs: 45,
              fats: 2,
            },
          ],
        },
      ],
    },
    {
      title: "Weight Loss Plan",
      description: "Calorie-controlled diet for healthy weight loss",
      calories: 1800,
      macros: {
        protein: 120,
        carbs: 180,
        fats: 60,
      },
      meals: [
        {
          name: "Breakfast",
          foods: [
            {
              name: "Egg White Omelette",
              calories: 200,
              protein: 20,
              carbs: 5,
              fats: 10,
            },
            {
              name: "Whole Grain Toast",
              calories: 100,
              protein: 4,
              carbs: 20,
              fats: 2,
            },
          ],
        },
        {
          name: "Lunch",
          foods: [
            {
              name: "Grilled Fish",
              calories: 250,
              protein: 35,
              carbs: 0,
              fats: 12,
            },
            {
              name: "Mixed Salad",
              calories: 150,
              protein: 5,
              carbs: 15,
              fats: 8,
            },
          ],
        },
      ],
    },
  ],

  achievements: [
    {
      title: "First Workout",
      description: "Completed your first workout",
      type: "workout",
      points: 50,
      icon: "🏋️‍♂️",
    },
    {
      title: "Week Streak",
      description: "Completed workouts for 7 days in a row",
      type: "streak",
      points: 100,
      icon: "🔥",
    },
    {
      title: "Nutrition Master",
      description: "Followed nutrition plan for 30 days",
      type: "nutrition",
      points: 200,
      icon: "🥗",
    },
  ],

  motivationalMessages: [
    {
      message: "The only bad workout is the one that didn't happen.",
      category: "workout",
      isActive: true,
    },
    {
      message:
        "Your body can stand almost anything. It's your mind you have to convince.",
      category: "general",
      isActive: true,
    },
    {
      message: "The difference between try and triumph is just a little umph!",
      category: "motivation",
      isActive: true,
    },
  ],
};

const populateDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Workout.deleteMany({});
    await Nutrition.deleteMany({});
    await Progress.deleteMany({});
    await UserWorkout.deleteMany({});
    await UserNutrition.deleteMany({});
    await Achievement.deleteMany({});
    await MotivationalMessage.deleteMany({});

    // Insert sample data
    const users = await User.insertMany(sampleData.users);
    const workouts = await Workout.insertMany(sampleData.workouts);
    const nutritionPlans = await Nutrition.insertMany(
      sampleData.nutritionPlans
    );
    const achievements = await Achievement.insertMany(sampleData.achievements);
    const messages = await MotivationalMessage.insertMany(
      sampleData.motivationalMessages
    );

    // Assign some workouts and nutrition plans to users
    for (const user of users) {
      if (user.role === "user") {
        // Assign workouts
        for (const workout of workouts) {
          await UserWorkout.create({
            user: user._id,
            workout: workout._id,
            dateAssigned: new Date(),
            status: "assigned",
          });
        }

        // Assign nutrition plans
        for (const plan of nutritionPlans) {
          await UserNutrition.create({
            user: user._id,
            nutrition: plan._id,
            dateAssigned: new Date(),
            status: "assigned",
          });
        }

        // Create some progress entries
        await Progress.create({
          user: user._id,
          weight: 70 + Math.random() * 10,
          bodyFat: 15 + Math.random() * 5,
          measurements: {
            chest: 90 + Math.random() * 5,
            waist: 80 + Math.random() * 5,
            hips: 90 + Math.random() * 5,
          },
          notes: "Initial measurements",
        });
      }
    }

    console.log("Sample data populated successfully!");
  } catch (error) {
    console.error("Error populating sample data:", error);
  }
};

module.exports = populateDatabase;
