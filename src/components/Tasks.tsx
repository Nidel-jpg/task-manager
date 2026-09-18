import type { Task } from "../types/tasks"
import { TaskCard } from "./TaskCard"

interface TaskProps{
    tasks: Task[];
    onDelete: (id:number)=>void;
    onToggle: (id:number)=>void;
    
}

export const Tasks = ({ tasks ,onDelete,onToggle}:TaskProps) => {
  return (
    <div className="flex justify-around flex-wrap space-y-8 min-h-screen mt-20 ">
            {tasks.map((task)=>(
            <TaskCard key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
            
          </div>  
  )
}
