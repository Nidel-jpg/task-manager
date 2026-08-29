// import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
// import { TaskCard } from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import type { Task } from "./types/tasks";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {  Tasks } from "./components/Tasks";
// import TaskForm from "./components/TaskForm";

function App(){
  const [tasks,setTakes]=useState<Task[]>([
      {
      id: 1,
      title: "Learn React",
      description: "Practice React components and props",
      priority: "high",
      completed: false,
      dueDate: "2026-08-30",
    },
    {
      id: 2,
      title: "Build Express API",
      description: "Create my first Express API",
      priority: "medium",
      completed: false,
      dueDate: "2026-09-02",
    },
    {
      id: 3,
      title: "Learn MongoDB",
      description: "Learn how to store data with MongoDB",
      priority: "low",
      completed: true,
      dueDate: "2026-09-05",
    },
  ])

  
  const addTask =(newTask:Task)=>{
        setTakes((previousTasks)=>[...previousTasks,newTask])
  }
  return(
    <BrowserRouter>
    <Navbar/>

    <Routes>

      <Route path="/tasks" element={<Tasks tasks={tasks} />}/>

      <Route path="/add-task" element={<TaskForm onAddTask={addTask} /> }/>

    </Routes>
    
    
    
    </BrowserRouter>
  )
}
export default App;