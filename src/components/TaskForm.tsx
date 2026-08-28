const TaskForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <form className="flex w-120 flex-col gap-4 rounded-2xl border border-purple-200 bg-white p-8 shadow-lg">

        <h2 className="mb-4 text-center text-3xl font-bold text-purple-700">
          Add a Task
        </h2>

        {/* Title */}
        <label
          htmlFor="title"
          className="font-semibold text-black"
        >
          Title
        </label>

        <textarea
          id="title"
          rows="2"
          placeholder="Write your title..."
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        ></textarea>

        {/* Description */}
        <label
          htmlFor="description"
          className="font-semibold text-black"
        >
          Description
        </label>

        <textarea
          id="description"
          rows="5"
          placeholder="Write your description..."
          className="w-full resize-none rounded-xl border-2 border-purple-500 bg-white p-3 text-black placeholder-gray-400 outline-none transition duration-200 focus:border-purple-800 focus:ring-2 focus:ring-purple-200"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="mt-3 rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition duration-200 hover:bg-purple-700 active:scale-95"
        >
          Add Task
        </button>

      </form>
    </div>
  )
}

export default TaskForm