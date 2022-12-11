"use client";
import { useState, ReactNode } from "react";
type Props = {
  children: ReactNode;
  buttonText: string;
  buttonIcon: ReactNode;
};
export default function Modal(props: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <button
        onClick={() => setVisible(true)}
        className="items-centerrounded-md my-3 flex bg-slate-800 py-2 px-5 text-white shadow-md shadow-slate-700 hover:bg-slate-700"
      >
        {props.buttonIcon}
        {props.buttonText}
      </button>
      {visible && (
        <>
          <div className="fixed top-1/2 left-1/2 z-20 max-h-[75%] w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-auto">
            {props.children}
          </div>
          <div
            onClick={() => setVisible(false)}
            className="fixed top-0 left-0 z-10 h-screen w-screen bg-slate-900 bg-opacity-50 backdrop-blur-sm"
          ></div>
        </>
      )}
    </>
  );
}
