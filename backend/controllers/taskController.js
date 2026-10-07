const Task = require("../models/taskModel");

//Get all tasks:
const getTasks = async (req,res)=>{
  try {
    
    const task= await Task.findById(req.params.id);
    if (!task ) {
      return res.status(404).json({ message: "Task not found" });
    }



    res.json(task);
  } catch (error) {
     res.status(404).json({ message: "Task not found" });
  }
}
module.exports = {
  getTasks,
}