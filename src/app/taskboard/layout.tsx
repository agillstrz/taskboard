import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="my-20">{children}</div>;
}
