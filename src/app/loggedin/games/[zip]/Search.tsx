"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import usZips from "us-zips/map";
export default function Search({ zip }: any) {
  const router = useRouter();
  const [state, setstate] = useState(zip || "none");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setstate(e.target.value);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (usZips.get(state) !== undefined) {
      router.push("/loggedin/games/" + state);
    } else {
      if (window) alert("please enter valid zip code");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex w-full  flex-wrap">
      <label
        className="mb-2 block w-full text-xs font-bold uppercase tracking-wide text-white"
        htmlFor="form-locator"
      >
        Location
      </label>
      <input
        className=" block appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
        id="form-locator"
        type="text"
        name="locator"
        value={state}
        onChange={handleChange}
        placeholder="Search Zip Code"
      />
      <button className="flex items-center justify-center gap-2 rounded bg-slate-800 py-2 px-5 text-center text-white shadow-md shadow-slate-700 hover:bg-slate-800">
        Search
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5 fill-none stroke-white"
        >
          <path
            fillRule="evenodd"
            d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
}
