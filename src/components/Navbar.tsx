import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-around mt-6 pb-8 border-b border-purple-400/30 backdrop-blur-md">
      
      <h1 className="text-4xl font-bold text-purple-600/75">
        Task Manager
      </h1>

      <div>
        <Link to="/" className="btn btn-primary">
          Home
        </Link>

        <Link to="/tasks" className="btn btn-primary ml-2">
          Tasks
        </Link>


        <Link to="/add-task" className="btn btn-primary ml-2">
          Add Task
        </Link>
      </div>

    </nav>
  );
};