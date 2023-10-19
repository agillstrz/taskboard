"use client";
import { useAppSelector } from "@/redux/store";
import Card from "../Card";
import FormTask from "../commons/AddTask";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ButtonTask from "../commons/ButtonTask";
export default function Task({ name, task }: { name: string; task: number }) {
  const todos = useAppSelector((state) => state.task);
  const [show, setShow] = useState<boolean>(false);
  const count = todos.filter((todo) => todo.task == task).length;
  const colors =
    task === 1
      ? "bg-black"
      : task === 2
      ? "bg-red-500"
      : task === 3
      ? "bg-yellow-500"
      : " bg-emerald-500";
  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="h-12 border w-full text-center items-center px-2 rounded-lg flex justify-between">
        <div className="flex gap-x-2 items-center">
          <h1 className="font-semibold">{name}</h1>
          <span
            className={`rounded-full border w-8 ${colors} text-white  flex justify-center items-center h-8 p-1`}
          >
            {count}
          </span>
        </div>
        {<ButtonTask show={show} onClick={() => setShow(!show)} />}
      </div>

      {<FormTask show={show} setShow={setShow} task={task} />}

      {count == 0 && (
        <div className="flex flex-col p-2 border rounded-lg items-center">
          <img
            className="w-10 block"
            src="https://cdn4.iconfinder.com/data/icons/doodle-3/160/sad-emoji-256.png"
            alt=""
          />
          <p className="font-medium  lg:text-lg text-center">No Activity</p>
        </div>
      )}
      <div className="flex flex-col gap-3 w-full">
        <AnimatePresence>
          {todos
            .filter((filter) => filter.task == task)
            .reverse()
            .map((data) => (
              <Card key={data.id} {...data} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
