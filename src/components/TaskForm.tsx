import React, { useState } from "react"
import type { Task } from "../types/tasks";
import { useNavigate } from "react-router-dom";

interface TaskFormProps{
    onAddTask: (task:Task)=>void
  }

const TaskForm = ({onAddTask}:TaskFormProps) => {

    const navigate= useNavigate();
  

  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("")
  const [priority, setPriority] = useState<Task["priority"]>("medium");
  const [dueDate,setDueDate]=useState("")


  const handleSubmit = (e:React.FormEvent)=>{
      e.preventDefault();

      const newTask:Task={
        id:Date.now(),
        title:title,
        description:description,
        priority:priority,
        completed:false,
        dueDate:dueDate,
      };
      
      onAddTask(newTask)
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
          Add a Task
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
          onChange={(e)=>setDueDate(e.target.value)}
          placeholder="Write your title..."
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        />


        {/* Button */}
        <button
          type="submit"
          className="mt-3 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-purple-700 active:scale-95"
        >
          Add Task
        </button>

      </form>
    </div>
  )
}

export default TaskForm