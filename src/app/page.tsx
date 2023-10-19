"use client";
import TaskBoard from "@/components/tasks/TaskBoard";
import Link from "next/link";
export default function Home() {
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
    // <div className="h-screen flex  justify-center items-center">
    //   <div className="p-3 px-5 w-fit flex flex-col gap-4 border shadow-lg">
    //     <h1 className="font-bold text-5xl text-center">
    //       Welcome to Task Board
    //     </h1>
    //     <input
    //       type="text"
    //       placeholder="Input your board title"
    //       className="outline-none border px-2 rounded-lg h-12 w-full"
    //       name=""
    //       id=""
    //     />
    //     <Link
    //       href={"taskboard"}
    //       className="w-full py-2 text-center border rounded-lg bg-blue-600 font-bold text-white"
    //     >
    //       Create
    //     </Link>
    //   </div>
    // </div>
  );
}
