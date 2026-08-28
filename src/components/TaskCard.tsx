import type { Task } from "../types/tasks"

interface TaskCardProps{
    task: Task;
}
export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  return (
    <section >
        <div className="card flex flex-col  text-purple-600/75 border  border-purple-500 size-80 space-y-4  pl-4">
            <h1 className="text-xl pt-4">id: {task.id}</h1>
            <h4 className="text-base">title: {task.title}</h4>
            <h5 className="text-sm">description: {task.description}</h5>
            <h3 className="text-lg">priority: {task.priority}</h3>
            <p className="text-sm">completed: {task.completed}</p>
            <p className="text-sm">dueDate: {task.dueDate}</p>
            <div className="flex justify-around mt-auto mb-4">
                <button className="btn btn-active btn-accent">Edit</button>
                <button className="btn btn-active btn-accent">Delete</button>
            </div>

        </div>

        
    </section>
  )
}
