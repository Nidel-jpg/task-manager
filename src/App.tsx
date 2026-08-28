// import { Navbar } from "./components/Navbar";
import { Navbar } from "./components/Navbar";
import { TaskCard } from "./components/TaskCard";
import type { Task } from "./types/tasks";

// import TaskForm from "./components/TaskForm";

function App(){
  const tasks : Task[]=[
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

  ]
  return(
    <div>
      <Navbar/>
      <div className="flex justify-around  min-h-screen mt-20 ">
        {tasks.map((task)=>(
        <TaskCard key={task.id} task={task}/>
        ))}
        
        </div>      
    </div>
  )
}
export default App;