"use client";
import { reset, updateTask } from "@/redux/features/taskSlice";
import { AppDispatch } from "@/redux/store";
import { taskProps } from "@/type/type";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";

export default function EditTask({
  data,
  setEdit,
}: {
  data: taskProps;
  setEdit: Dispatch<SetStateAction<boolean>>;
}) {
  const [show, setShow] = useState<boolean>(false);
  const [form, setForm] = useState<taskProps>({
    id: data.id,
    description: data.description,
    title: data.title,
    task: data.task,
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleUpdate = () => {
    const { id, title, description, task } = form;
    dispatch(updateTask({ id, title, description, task }));
    setEdit(false);
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name == "task" ? Number(value) : value });
  };
  return (
    <>
      <motion.div
        className={`relative rounded-lg p-2 shadow-md border overflow-hidden transition-height flex flex-col gap-1    w-full `}
      >
        <input
          type="text"
          onChange={onChange}
          defaultValue={data.title}
          name="title"
          className="w-full h-16 rounded-md font-medium  outline-none border p-1  "
          placeholder="Title"
        />
        <textarea
          onChange={onChange}
          name="description"
          defaultValue={data.description}
          placeholder="what are you working on?"
          className="w-full h-full font-medium  outline-none  p-1  "
        />
        <div className="flex gap-1 justify-end w-full">
          <button
            onClick={() => setEdit(false)}
            className="px-4 py-1 rounded-lg  text-[12px]  bg-neutral-800 text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-1 rounded-lg  text-[12px]  bg-neutral-800 text-white"
          >
            Save
          </button>
        </div>
      </motion.div>
    </>
  );
}
