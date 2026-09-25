import React, { useEffect, useState } from "react"
import axios from "axios";
import type { Task } from "../types/tasks";
import { useNavigate, useParams } from "react-router-dom";

interface TaskFormProps{
    onAddTask: (task:Task)=>void;
    onEditTask: (updatedTask:Task)=>void
    isEdited:boolean;
    tasks: Task[]
  }

const TaskForm = ({onAddTask,onEditTask,isEdited,tasks}:TaskFormProps) => {
    
    const navigate= useNavigate();
    const {id}= useParams();
    

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("")
  const [priority, setPriority] = useState<Task["priority"]>("medium");
  const [dueDate,setDueDate]=useState("")

  const task= tasks.find((task)=>task.id === id)

    useEffect(()=>{
      if (isEdited && task){
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setDueDate(task.dueDate)
      }
    }
      ,[isEdited,task])


  const handleSubmit = async (e:React.FormEvent)=>{
      e.preventDefault();

      if(isEdited && task){
        try {
          const response = await axios.put(`http://localhost:3000/api/tasks/${task.id}`, {
            title,
            description,
            priority,
            dueDate,
          });

          //Our Backend is settled to return the updated task data in the response, which we can access using response.data. We can then create an updatedTask object that includes the updated task data along with the original task's ID, and call onEditTask with this object to update the state in App.tsx.

          const updatedTask: Task = {
            ...response.data,
            id: response.data._id, // Assuming the backend returns the updated task with an _id field
        
        };
        onEditTask(updatedTask);
        navigate("/tasks");
        return;  
        } catch (error) {
          console.error("Error updating task:", error);

        }
        
      }

      const newTask={
        
        title,
        description,
        priority,
        completed:false,
        dueDate,
      };
      //Send the new task to the backend API using axios as req.body and receive the response from the backend API and call onAddTask with the response data to update the state in App.tsx
      const response = await axios.post("http://localhost:3000/api/tasks",newTask)
      
      const createdTask: Task = {
        ...response.data,
        id: response.data._id, // Assuming the backend returns the new task with an _id field
      };




      onAddTask(createdTask);
      setTitle("");
      setDescription("");
      setPriority("medium");
      setDueDate("");
      navigate("/tasks");
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleSubmit} 
      className="flex w-120 flex-col gap-4 rounded-2xl border border-purple-200 bg-white p-8 shadow-lg">

        <h2 className="mb-4 text-center text-3xl font-bold text-purple-700">
          {isEdited ? "Edit Task" : "Add a Task"}
        </h2>

        {/* Title */}
        <label
          htmlFor="title"
          className="font-semibold text-black"
        >
          Title
        </label>

        <input
          id="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Write your title..."
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        />

        {/* Description */}
        <label
          htmlFor="description"
          className="font-semibold text-black"
        >
          Description
        </label>

        <input
          id="description"
          placeholder="Write your description..."
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        />

        <label
          htmlFor="priority"
          className="font-semibold text-black"
        >
          priority
        </label>

        <select
          id="priority"
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value as Task["priority"])
          }
          className="w-full rounded-xl border-2 border-purple-500 bg-white p-3 text-black"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <label
          htmlFor="dueDate"
          className="font-semibold text-black"
        >
          dueDate
        </label>

        <input
          id="dueDate"
          value={dueDate}
          type="date"
          onChange={(e)=>setDueDate(e.target.value)}
          placeholder="Write your title..."
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        />


        {/* Button */}
        <button
          type="submit"
          className="mt-3 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-purple-700 active:scale-95"
        >
          {isEdited ? "Save Changes" : "Add Task"}
        </button>

      </form>
    </div>
  )
}

export default TaskForm