const express = require('express');
const router = express.Router();
const { getTasks, getTask,createTask, updateTask, deleteTask } = require('../controllers/taskController');






//When a GET request is made to the root path of this router (which is '/api/tasks' in the main server file), the getTasks function from the taskController will be executed. This function is responsible for fetching all tasks from the database and sending them back in the response.
router.get('/', getTasks);

//When a GET request is made to the '/:id' path of this router, the getTask function from the taskController will be executed. This function is responsible for fetching a specific task by its ID from the database and sending it back in the response.
router.get('/:id', getTask);
router.post('/', createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
module.exports = router;