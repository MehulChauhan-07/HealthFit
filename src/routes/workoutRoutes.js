const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");
const { isAuthenticated } = require("../middleware/auth");

// Public routes
router.get("/", workoutController.getAllWorkouts);
router.get("/:id", workoutController.getWorkoutById);

// Protected routes
router.post("/assign", isAuthenticated, workoutController.assignWorkout);
router.get(
  "/user/workouts",
  isAuthenticated,
  workoutController.getUserWorkouts
);
router.put(
  "/:id/status",
  isAuthenticated,
  workoutController.updateWorkoutStatus
);

module.exports = router;
