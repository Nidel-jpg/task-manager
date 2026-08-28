
export const TaskCard = () => {
  return (
    <section className="flex justify-around min-h-screen mt-20 ">
        <div className="card flex flex-col  text-purple-600/75 border  border-purple-500 size-70 space-y-4  pl-4">
            <h1 className="text-xl pt-4">Name of practise:</h1>
            <h4 className="text-base">Status:...</h4>
            <h5 className="text-sm">Ratings:...</h5>
            <h3 className="text-lg">Date of production : ...</h3>
            <p className="text-sm">Comments: ...</p>
            <div className="flex justify-around ">
                <button className="btn btn-active btn-accent">Edit</button>
                <button className="btn btn-active btn-accent">Delete</button>
            </div>

        </div>

        <div className="card flex flex-col  text-purple-600/75 border  border-purple-500 size-70 space-y-4 pl-4 ">
            <h1 className="text-xl pt-4">Name of practise:</h1>
            <h4 className="text-base">Status:...</h4>
            <h5 className="text-sm">Ratings:...</h5>
            <h3 className="text-lg">Date of production : ...</h3>
            <p className="text-sm">Comments: ...</p>
            <div className="flex justify-around ">
                <button className="btn btn-active btn-accent">Edit</button>
                <button className="btn btn-active btn-accent">Delete</button>
            </div>
        </div>

        <div className="card flex flex-col  text-purple-600/75 border  border-purple-500 size-70 space-y-4 pl-4 ">
            <h1 className="text-xl pt-4">Name of practise:</h1>
            <h4 className="text-base">Status:...</h4>
            <h5 className="text-sm">Ratings:...</h5>
            <h3 className="text-lg">Date of production : ...</h3>
            <p className="text-sm">Comments: ...</p>
            <div className="flex justify-around ">
                <button className="btn btn-active btn-accent">Edit</button>
                <button className="btn btn-active btn-accent">Delete</button>
            </div>
        </div>
    </section>
  )
}
