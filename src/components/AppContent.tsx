import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Tasks } from "./Tasks";
import TaskForm from "./TaskForm";
import type { Task } from "../types/tasks";

import TaskSearch from "./TaskSearch";

interface Props{
    tasks: Task[];
    onDelete: (id:string)=>void;
    onAddTask: (newTask:Task)=>void;
    onEditTask:(updatedTask:Task)=>void;
    onToggle:(id:string)=>void;
    
}

const AppContent = ({tasks, onDelete, onAddTask,onToggle,onEditTask}:Props) => {
    const location = useLocation();
  return (
    <>
        {location.pathname!== "/search" && <Navbar/>}

        <Routes>
            <Route
    path="/"
    element={<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle} />}
  />




            <Route path="/tasks" element={<Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}  />}/>

            <Route path="/add-task" element={<TaskForm onAddTask={onAddTask} isEdited={false} onEditTask={onEditTask} tasks={tasks}/> }/>

            <Route path="/tasks/edit/:id" element={<TaskForm onEditTask={onEditTask} tasks={tasks} onAddTask={onAddTask} isEdited={true} />} />


            <Route path="/search" element={<TaskSearch tasks={tasks} onDelete={onDelete} onToggle={onToggle}/>} />
        </Routes>
    
    </>
  )
}

export default AppContent