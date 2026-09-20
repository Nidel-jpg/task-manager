
const express= require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const Task = require("./models/Tasks");

const dns= require("dns")
dns.setServers(["1.1.1.1","8.8.8.8"])

const app=express();
const PORT=3000;
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});
//Read Task collection from mongoDB atlas through model mongoose.
app.get("/api/tasks", async (req, res) => {
  
  try {
    const tasks= await Task.find();
     

    res.json(tasks);
  } catch (error) {
    res.status(500).json({message: "Failed to fetch tasks"})
  }



});

//Get one Task By it's proper Id:
app.get("/api/tasks/:id",async (req,res)=>{
  try {
    const task= await Task.findById(req.params.id);


    res.json(task);
  } catch (error) {
     res.status(500).json({ message: "Failed to fetch task" });
  }
})


//Update a task:

app.put("/api/tasks/:id",async (req,res)=>{
  
  try{
    const updatedTask= await Task.findByIdAndUpdate(
    req.params.id,
    // This tells MongoDB:
    //"Which task should I update?"
    req.body,
    //This tells MongoDB:
    //"What changes should I make?"
    {new:true}
    //"After updating the task, give me the new/updated version of the task."
    //Without { new: true }, Mongoose's default behavior returns the old version of the document.

  );
  res.json(updatedTask)
  }

  catch (error) {
    //Internal Server Error
   res.status(500).json({
    message: "Failed to update task"
   })
}


}

)

// Delete a Task: 
app.delete("/api/tasks/:id",async (req,res)=>{

  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    
    res.json(deletedTask)
  } catch (error) {
    res.status(500).json({
      message:"Failed to delete task"
    })
  }

})






//Receives client info and send it back to create a new model and save it  in mongoDB atlas through mongoose .

app.post("/api/tasks",async (req,res)=>{
    try {
      const task= await Task.create(req.body);

      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: "Failed to create task" });
    }
})

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("MongoDB connected")}
).catch(
  (error) => {
    console.error("MongoDB connection failed:", error);
  }
)







app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});