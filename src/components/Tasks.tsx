import type { Task } from "../types/tasks"
import { TaskCard } from "./TaskCard"

export const Tasks = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="flex justify-around flex-wrap space-y-8 min-h-screen mt-20 ">
            {tasks.map((task)=>(
            <TaskCard key={task.id} task={task}/>
            ))}
            
          </div>  
  )
}
