"use client";
import React from "react";
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
          <div className="relative">
            <div className="fixed top-1/2 left-1/2 z-20 h-[75%] w-3/4 -translate-x-1/2 -translate-y-1/2">
              <button
                className="fixed -top-4 -left-4 z-30 text-white"
                onClick={() => setVisible(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-10 w-10 rounded-full fill-red-500 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
              {React.cloneElement(props.children as any, {
                setVisible: setVisible,
              })}
            </div>
            <div
              onClick={() => setVisible(false)}
              className="fixed top-0 left-0 z-10 h-screen w-screen bg-slate-900 bg-opacity-50 backdrop-blur-sm"
            ></div>
          </div>
        </>
      )}
    </>
  );
}
