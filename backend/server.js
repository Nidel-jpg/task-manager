
const express= require("express");
const mongoose=require("mongoose");
require("dotenv").config();


const dns= require("dns")
dns.setServers(["1.1.1.1","8.8.8.8"])

const app=express();
const PORT=3000;
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Task Manager API is running!");
});
app.get("/api/tasks", (req, res) => {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      priority: "high",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Express",
      priority: "medium",
      completed: false,
    },
  ];

  res.json(tasks);
});


app.post("/api/tasks",(req,res)=>{
    const task=req.body;
    console.log(task);

    res.status(201).json(task);
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