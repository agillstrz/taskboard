import React, { DOMAttributes, MouseEventHandler } from "react";
import { TiPlus } from "react-icons/ti";

type buttonProps = {
  show: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
export default function ButtonTask({ onClick, show }: buttonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full p-2 border hover:bg-[#F6F6F6] transition-all duration-100 ease-linear "
    >
      <span
        className={`text-xl transition-all duration-300 ease-in ${
          show && "rotate-90"
        }`}
      >
        <TiPlus />
      </span>
    </button>
  );
}
