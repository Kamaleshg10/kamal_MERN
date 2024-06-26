const express = require('express');
const router = express.Router();
const {createTask,getTasks,getSingleTasks,updateTask,deleteTask} = require("../controllers/taskcontroller");

router.post('/',createTask);
router.get('/',getTasks);
router.get("/:id",getSingleTasks);
router.patch("/:id",updateTask);
router.delete("/:id",deleteTask);

module.exports = router;