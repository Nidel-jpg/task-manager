
const express= require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const Task = require("./models/Tasks");
const taskRoutes= require("./routes/taskRoutes");
const dns= require("dns");
//const { createTask } = require("./controllers/taskController");
dns.setServers(["1.1.1.1","8.8.8.8"])

const app=express();
const PORT=3000;
app.use(express.json())

//just below this line, we are allowing our backend to accept requests from our frontend.
app.use(cors());

app.use("/api/tasks",taskRoutes)


app.get("/", );

//Get one Task By it's proper Id:
//app.get("/api/tasks/:id",getTask)


//Update a task:

//app.put("/api/tasks/:id", updateTask);

// Delete a Task: 
//app.delete("/api/tasks/:id", deleteTask)






//Receives client info and send it back as req.body to create a new model and save it  in mongoDB atlas through mongoose .

//app.post("/api/tasks", createTask);

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