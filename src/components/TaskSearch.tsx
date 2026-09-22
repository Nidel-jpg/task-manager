import { useState } from "react"
import type { Task } from "../types/tasks";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

interface SearchProps {
    tasks: Task[];
    
    onDelete: (id:string)=>void;
    onToggle: (id:string)=>void;
}
const TaskSearch = ({tasks,onToggle, onDelete}:SearchProps) => {
    const [search, setSearch]=useState("")
    const [priorityFilter, setPriorityFilter] = useState<"all"| Task["priority"]>("all");   
    const [statusFilter,setStatusFilter]=useState<"all"|"completed"|"pending">("all");
    const navigate=useNavigate();
    const foundTask= tasks.filter(
        (task)=>{
            const searchText = search.toLowerCase();
            const matchesSearch=task.title.toLowerCase().includes(searchText) ||
                task.description.toLowerCase().includes(searchText);
            const matchesPriority= priorityFilter === "all"||task.priority === priorityFilter;
            const matchesStatus= statusFilter==="all" || (statusFilter=== "completed"&& task.completed===true)||
            (statusFilter=== "pending"&& task.completed===false)
            return matchesPriority && matchesSearch && matchesStatus
        }

            // task.title.toLowerCase() === search.toLowerCase()
            

    )
    //Extract the Priority from each task
    // Matches with priority search
    // meet a condition: if these two are equals=> we will show it's corresponding task

    const clearFilters= ()=>{
        setSearch("");
        setPriorityFilter("all");
        setStatusFilter("all")

    }
    
    
        

  return (
    <main className="relative min-h-screen bg-black flex items-center justify-center animate-search">
                <button
                    onClick={() => navigate("/tasks")}
                    className="absolute right-8 top-8 text-3xl text-white hover:text-purple-400"
                    >
                    ✕
                    </button>


                    <div className="w-full px-4 sm:px-6">

                {/* Search bar */}
                <div className="mx-auto max-w-xl max-sm:mt-8 mt-5">
                    <input
                        type="text"
                        placeholder="Search task..."
                        value={search}
                        autoFocus
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border-2 border-purple-500 bg-transparent p-4 text-xl text-white outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                    />
                    <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                        <select value={priorityFilter} className="rounded-lg w-full sm:w-auto  border border-purple-500 bg-gray-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500"
                            onChange={(e)=>setPriorityFilter(e.target.value as "all" | Task["priority"])}>
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        </select>
                        <select value={statusFilter} className="rounded-lg w-full sm:w-auto  border border-purple-500 bg-gray-900 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-purple-500"
                        onChange={(e)=>setStatusFilter(e.target.value as "all" | "completed"|"pending")}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                        
                       </select>
                       {
                        (
                            (search!=="" || priorityFilter!=="all" || statusFilter!=="all")&&(
                                <button onClick={clearFilters}  className="rounded-lg sm:w-auto  bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-500"
  >
                                    Clear Filters
                                </button>
                            )
                        )
                       }
                    </div>
                </div>

                {/* Results */}
                
                    <div className="mt-8">
                        {foundTask.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-6">
                                {foundTask.map((task) => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        onToggle={onToggle}
                                        onDelete={onDelete}
                                    />
                                ))}
                            </div>
                        ) : tasks.length === 0?(
                            <p className="text-center text-xl text-gray-400">
                                No tasks available 📋
                            </p>
                        ):(
                            <p className="text-center text-xl text-red-400">
                                Task not found ❌
                            </p>
                        )}
                    </div>
                

                        </div>    




    </main>
  )
}

export default TaskSearch