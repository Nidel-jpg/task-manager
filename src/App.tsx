// import { Navbar } from "./components/Navbar";
import { useEffect, useState } from "react";
// import { Navbar } from "./components/Navbar";
// import { TaskCard } from "./components/TaskCard";
import axios from "axios";
// import TaskForm from "./components/TaskForm";
import type { Task } from "./types/tasks";
import { BrowserRouter } from "react-router-dom";
// import {  Tasks } from "./components/Tasks";
import AppContent from "./components/AppContent";
import './App.css'
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


  useEffect(()=>{
    axios.get("http://localhost:3000/api/tasks")
    .then((response)=>{
      console.log('API response', response.data)
      setTakes(response.data)
    })
    .catch((error)=>{
      console.error("Error fetching tasks:", error);
    })

}, []);
  
  const addTask =(newTask:Task)=>{
        setTakes((previousTasks)=>[...previousTasks,newTask])
  }

  const deleteTask = (id: number)=>{
    setTakes((previousTasks)=>previousTasks.filter((task)=>task.id!==id))
  }

  const toggleTask= (id:number)=>{
    setTakes((previousTasks)=>previousTasks.map((task)=>task.id === id? {...task,completed:!task.completed}:task))
  }

  const editTask=(updatedTask:Task)=>{
      setTakes((previousTasks)=>previousTasks.map((task)=>task.id=== updatedTask.id ? updatedTask : task))
  }

  return(
    <BrowserRouter>
      <AppContent tasks={tasks} onAddTask={addTask} onDelete={deleteTask} onEditTask={editTask} onToggle={toggleTask} />
    
    </BrowserRouter>
  )
}
export default App;