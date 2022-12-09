"use client";
import { useState } from "react";
import { useUser } from "@supabase/auth-helpers-react";
import Message from "./message";
let messages = [
  {
    message: "Come to the store",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message:
      "Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there",
    user: "Matt",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there again",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Come to the store",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
  {
    message: "Hello there",
    user: "Josh",
    time: "2:30",
    date: "9/22/22",
  },
];

export default function Page() {
  const [state, setstate] = useState("");
  const user = useUser();

  return (
    <div className="mt-16 mb-20 bg-slate-700">
      <div className="h-[calc(100vh-theme(space.36))] overflow-scroll overflow-x-hidden pb-12">
        {messages.map((item) => (
          <Message
            message={item.message}
            user={item.user}
            time={item.time}
            date={item.date}
          />
        ))}
      </div>
      <div className="fixed bottom-16 flex w-full ">
        <input
          className="flex-grow rounded-sm p-2"
          value={state}
          onChange={(e) => setstate(e.target.value)}
          type="text"
        />
        <button className="grid basis-10 place-items-center bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
