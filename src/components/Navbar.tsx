

export const Navbar = () => {
  return (
    <nav className="flex justify-around mt-6 pb-8 border-b pt border-purple-400/30  backdrop-blur-md  ">
        <h1 className="text-4xl font-bold text-purple-600/75">Task Manager</h1>
        <div>
            <a href="#" className="btn btn-primary">Home</a>
            <a href="#" className="btn btn-primary ml-2">Tasks</a>
        </div>
    </nav>
  )
}
