import { Link } from "react-router-dom";
import { Search } from 'lucide-react';
export const Navbar = () => {
  return (
    <nav className="flex  justify-around  mt-6 pb-8 border-b border-purple-400/30 backdrop-blur-md">
      
      <h1 className="text-2xl sm:text-4xl font-bold text-purple-600/75" >
        Task Manager
      </h1>

      <div className="flex justify-around ">
        <Link to="/" className="btn btn-primary gap-1 sm:gap-2">
          Home
        </Link>

        <Link to="/tasks" className="btn btn-primary ml-2 gap-1 sm:gap-2">
          Tasks
        </Link>


        <Link to="/add-task" className="btn btn-primary ml-2 gap-1 sm:gap-2">
          Add Task
        </Link>


        <Link to="/search" className="ml-6 mt-2">
             <Search size={27} color="blue" strokeWidth={2} /> 
        </Link>
      </div>

    </nav>
  );
};