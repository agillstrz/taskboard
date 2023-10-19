import Search from "@/components/commons/Search";
import TaskBoard from "@/components/tasks/TaskBoard";

export default function page() {
  return (
    <div className="lg:mx-20 mx-4 flex flex-col gap-4">
      <div>
        <h1 className="text-3xl font-semibold ">Task Board</h1>
        <p className="text-medium text-zinc-500">
          The task board to keep track of your tasks.
        </p>
      </div>
      {/* <Search /> */}
      <div className="grid w-full  gap-4 md:gap-4  md:grid-cols-3 grid-cols-1 lg:grid-cols-4">
        <TaskBoard />
      </div>
    </div>
  );
}
