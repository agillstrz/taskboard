"use client";
import { deleteTask, updateTask } from "@/redux/features/taskSlice";
import { AppDispatch } from "@/redux/store";
import { taskProps } from "@/type/type";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import EditTask from "./commons/EditTask";
export default function Card(data: taskProps) {
  const task = data.task == 1 ? "Todo" : data.task == 2 ? "Riview" : "Done";
  const dispatch = useDispatch<AppDispatch>();
  const [edit, setEdit] = useState<boolean>(false);
  const handleUpdate = (e: any) => {
    dispatch(
      updateTask({
        id: Number(data.id),
        title: data.title,
        description: data.description,
        task: Number(e.target.value),
      })
    );
  };
  const color =
    data.task == 1
      ? "text-blue-700"
      : data.task == 2
      ? "text-yellow-500"
      : "text-green-500";

  if (edit) {
    return <EditTask data={data} setEdit={setEdit} />;
  }

  const handleDelete = (id: number) => {
    dispatch(deleteTask({ id }));
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, zIndex: -5 }}
      animate={{ opacity: 1, y: 0, zIndex: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ y: 100, opacity: 0, zIndex: -5 }}
      className="flex flex-col gap-1 border p-2 shadow-md bg-abu rounded-lg "
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-1">
          <button className="flex gap-x-1 border text-[12px] border-black/50  px-2 py-1 rounded-xl items-center">
            <span className={`${color} text-[10px]`}>
              <BsCircleFill />
            </span>
            {task}
          </button>
        </div>
        <div className="flex gap-1 items-center">
          <button onClick={() => setEdit(!edit)} className="lg:text-xl">
            <AiOutlineSetting />
          </button>
          <button onClick={() => handleDelete(data.id)} className="lg:text-xl">
            <RiDeleteBin2Line />
          </button>
        </div>
      </div>
      <h1
        className={`lg:text-xl font-semibold ${
          data.task == 4 && "line-through"
        }`}
      >
        {data?.title}
      </h1>
      <p
        className={`text-[14px] text-zinc-600 font-medium ${
          data.task == 4 && "line-through"
        }`}
      >
        {data?.description}
      </p>
      <div className="flex gap-2 text-zinc-600 font-medium items-center text-[12px]">
        <label className="flex gap-1 items-center">
          <input
            onClick={handleUpdate}
            type="radio"
            defaultChecked={data.task == 1}
            value={1}
            name="task"
          />
          Todo
        </label>
        <label className="flex gap-1 items-center">
          <input
            onClick={handleUpdate}
            defaultChecked={data.task == 2}
            type="radio"
            value={2}
            name="task"
          />
          Doing
        </label>
        <label className="flex gap-1 items-center">
          <input
            onClick={handleUpdate}
            defaultChecked={data.task == 3}
            type="radio"
            value={3}
            name="task"
          />
          Riview
        </label>
        <label className="flex gap-1 items-center">
          <input
            onClick={handleUpdate}
            defaultChecked={data.task == 4}
            type="radio"
            value={4}
            name="task"
          />
          Done
        </label>
      </div>
    </motion.div>
  );
}
