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
 const [tasks, setTakes] = useState<Task[]>([]);


  useEffect(()=>{
    axios.get("http://localhost:3000/api/tasks")
    .then((response)=>{
      console.log('API response', response.data)
      //Map the response data to match the Task interface, converting _id to id
      const tasks= response.data.map((task:any)=>({
        ...task,
        id: task._id,
      }));
      
      setTakes(tasks)
    })
    .catch((error)=>{
      console.error("Error fetching tasks:", error);
    })

}, []);
  
  const addTask =(newTask:Task)=>{
        setTakes((previousTasks)=>[...previousTasks,newTask])
  }

  const deleteTask = async (id: string)=>{
    try {
      //We first delete the task from the backend API using axios and then update the state in App.tsx
        await axios.delete(`http://localhost:3000/api/tasks/${id}`);
    setTakes((previousTasks)=>previousTasks.filter((task)=>task.id!==id))
  }catch(error){
        console.error("Error deleting task:", error);
    }
}

  const toggleTask= async(id:string)=>{
    try {
      const task= tasks.find((task)=>task.id === id);
      if(!task) return;
        const response = await axios.put(`http://localhost:3000/api/tasks/${id}`, { completed: !task.completed });
      const updatedTask: Task= {

         ...response.data,
        id: response.data._id,

      }
      setTakes((previousTasks)=>previousTasks.map((task)=>task.id === id? updatedTask : task))
      
    } catch (error) {
        console.error("Error toggling task:", error);
    }
    
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