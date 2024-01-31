const express = require("express");
const router = express.Router();
const { getTasks, getSingleTask, postTask, patchTask, deleteTask } = require("../controllers/tasksController");


// Get
router.get("/", getTasks);
router.get("/:id", getSingleTask);


// Post
router.post("/", postTask);

// Put
router.put("/:id", patchTask);

// Delete
router.delete("/:id", deleteTask);

module.exports = router;