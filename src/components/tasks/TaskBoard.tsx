import React from "react";
import Task from "./Task";

export default function TaskBoard() {
  const taskBoard = [
    { name: "Todo", task: 1 },
    { name: "Doing", task: 2 },
    { name: "Riview", task: 3 },
    { name: "Done", task: 4 },
  ];
  return (
    <>
      {taskBoard.map((m) => (
        <Task key={m.task} name={m.name} task={m.task} />
      ))}
    </>
  );
}
