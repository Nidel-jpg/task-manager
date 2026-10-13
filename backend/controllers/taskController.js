const mongoose = require("mongoose");

const Task = require("../models/Tasks");
// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tasks",
    });
  }
};


const getTask=  async (req,res)=>{
  try {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
    const task= await Task.findById(req.params.id);
    if (!task ) {
      return res.status(404).json({ message: "Task not found" });
    }



    res.json(task);
  } catch (error) {
     res.status(500).json({ message: "Failed to fetch task" });
  }
}


const createTask = async (req,res)=>{
    try {
      const task= await Task.create(req.body);

      res.status(201).json(task);
    } catch (error) {
      if (error.name === "ValidationError" || error.name === "CastError") {
        return res.status(400).json({ message: "Invalid task data" });
      }
      res.status(500).json({ message: "Failed to create task" });
    }
}


const updateTask = async (req,res)=>{
  //Axios sent the updated task data in the request body, which we can access using req.body. We also have the task's ID in req.params.id, which we can use to find the specific task to update in the database.
  
  try{
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const updatedTask= await Task.findByIdAndUpdate(
    req.params.id,
    // This tells MongoDB:
    //"Which task should I update?"
    req.body,
    //This tells MongoDB:
    //"What changes should I make?"
    {new:true, runValidators:true}
    //"After updating the task, give me the new/updated version of the task."
    //Without { new: true }, Mongoose's default behavior returns the old version of the document.

  );
  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(updatedTask)
  }

  catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({ message: "Invalid task data" });
    }
    //Internal Server Error 500
    //Client sent invalid data 400 from the frontend, so we send a 400 Bad Request response with a message indicating that the task data is invalid.
   res.status(500).json({
    message: "Failed to update task"
   })
}


}



const deleteTask= async (req,res)=>{

  try {
    if (!mongoose.isObjectIdOrHexString(req.params.id)) {
  return res.status(400).json({
    message: "Invalid task ID",
  });
}


    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }


    res.json(deletedTask)
  } catch (error) {
    res.status(500).json({
      message:"Failed to delete task"
    })
  }

} 





module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};
