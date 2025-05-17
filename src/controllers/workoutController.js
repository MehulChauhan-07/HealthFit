const Workout = require("../models/Workout");
const UserWorkout = require("../models/UserWorkout");

// Get all workouts
exports.getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching workouts", error: error.message });
  }
};

// Get workout by ID
exports.getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }
    res.json(workout);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching workout", error: error.message });
  }
};

// Assign workout to user
exports.assignWorkout = async (req, res) => {
  try {
    const { workoutId, userId } = req.body;

    const userWorkout = new UserWorkout({
      user: userId,
      workout: workoutId,
      dateAssigned: new Date(),
    });

    await userWorkout.save();
    res
      .status(201)
      .json({ message: "Workout assigned successfully", userWorkout });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error assigning workout", error: error.message });
  }
};

// Get user's workouts
exports.getUserWorkouts = async (req, res) => {
  try {
    const userWorkouts = await UserWorkout.find({ user: req.session.user.id })
      .populate("workout")
      .sort({ dateAssigned: -1 });
    res.json(userWorkouts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user workouts", error: error.message });
  }
};

// Update workout status
exports.updateWorkoutStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const userWorkout = await UserWorkout.findById(req.params.id);

    if (!userWorkout) {
      return res.status(404).json({ message: "Workout assignment not found" });
    }

    if (status === "completed") {
      userWorkout.dateCompleted = new Date();
    }

    userWorkout.status = status;
    if (notes) userWorkout.notes = notes;

    await userWorkout.save();
    res.json({ message: "Workout status updated successfully", userWorkout });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating workout status", error: error.message });
  }
};
