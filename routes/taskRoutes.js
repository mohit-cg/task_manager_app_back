const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/taskController");
router.get("/getTasks", tasksController.getAllTasks);
router.post("/createTask", tasksController.createTask);
router.get("/getSingleTask/:id", tasksController.getSingleTask);
router.put("/editTask/:id", tasksController.editTask);
router.delete("/deleteTask/:id", tasksController.deleteTask);
module.exports = router;
