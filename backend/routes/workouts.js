const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const { requireAth } = require("../middleware/requireAuth");

const router = express.Router();

//  require auth for all workout routes
router.use(requireAth);

//  GET all workouts
router.get("/", getAllWorkouts);

//  GET a single workouts
router.get("/:id", getWorkoutById);

//  POST a new workout
router.post("/", createWorkout);

//  DELETE a workout
router.delete("/:id", deleteWorkout);

//  UPDATE a new workout
router.patch("/:id", updateWorkout);

module.exports = router;
