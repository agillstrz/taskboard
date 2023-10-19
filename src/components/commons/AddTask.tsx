"use client";
import { addTask, reset } from "@/redux/features/taskSlice";
import { AppDispatch } from "@/redux/store";
import { taskProps } from "@/type/type";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonTask from "./ButtonTask";
export default function Input({
  task,
  show,
  setShow,
}: {
  task: number;
  show: boolean;
  setShow: any;
}) {
  const [form, setForm] = useState<taskProps>({
    id: 1,
    description: "",
    title: "",
    task: task,
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleAddTask = () => {
    const { title, description, task } = form;
    dispatch(addTask({ id: Date.now(), title, description, task }));
    setForm({
      id: Date.now(),
      description: "",
      title: "",
      task: task,
    });
    setShow(false);
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name == "task" ? Number(value) : value });
  };
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          exit={{ y: -200, scale: 0, zIndex: -5 }}
          className={`relative rounded-lg p-2 shadow-md border overflow-hidden transition-height flex flex-col gap-1    w-full `}
        >
          <input
            type="text"
            onChange={onChange}
            name="title"
            className="w-full h-16 rounded-md font-medium  outline-none border p-1  "
            placeholder="Title"
          />
          <textarea
            onChange={onChange}
            name="description"
            placeholder="what are you working on?"
            className="w-full h-full font-medium  outline-none  p-1  "
          />
          <div className="flex justify-end gap-2 items-center w-full">
            <button
              onClick={handleAddTask}
              className="px-4 py-1 rounded-lg  text-[12px]  bg-neutral-800 text-white"
            >
              Save
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
