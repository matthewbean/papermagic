"use client";
import { useState, useEffect } from "react";
import supabase from "../../../util/supabase";
import usZips from "us-zips/map";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function NewEventForm() {
  const [searchResults, setSearchResults]: any = useState(null);
  const supabaseClient = useSupabaseClient();
  const getUser = async () => {
    const { data, error } = await supabaseClient.auth.getUser();
    setState({ ...state, id: data?.user?.id as string });
  };
  const [state, setState] = useState({
    id: "",
    group_name: "",
    format: "Casual",
    description: "",
    start_time: "",
    location: null,
    date:
      new Date().getFullYear() +
      "-" +
      new Date().getMonth() +
      "-" +
      (new Date().getDate() < 10
        ? `0${new Date().getDate()}`
        : new Date().getDate()),
    private_venue: false,
    locator: "",
  });
  //handle changes to elements and reflect them in the state
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  //handle the person choosing a store
  const handleChooseStore = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: any
  ) => {
    e.preventDefault();
    setState({ ...state, locator: value.name, location: value });
  };

  //special case for checkbox
  const handleChecked = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setState({ ...state, [e.target.name]: !state.private_venue });
  };
  const createGroup = async (e) => {
    e.preventDefault();
    console.log(state.date + "T" + state.start_time);
    console.log(new Date());
    const { data, error } = await supabase.from("groups").insert({
      owner_id: state.id,
      group_name: state.group_name,
      store_id: state?.location?.store_id,
      start_date: state.date + "T" + state.start_time + ":00",
      private_venue: state.private_venue,
      format: state.format,
      description: "Casual commander",
      location: `POINT(${state?.location?.longitude} ${state?.location?.latitude})`,
    });
    console.log(data);
    console.error(error);
  };
  //fetch function
  const fetchStores = async (longitude: number, latitude: number) => {
    let { data, error } = await supabase.rpc("search_stores", {
      distance: 20,
      location: `POINT(${longitude} ${latitude})`,
    });

    if (error) console.error(error);
    // else console.log(data);
    setSearchResults(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (
      state.locator.length === 5 &&
      state.locator.match(/[0-9][0-9][0-9][0-9][0-9]/)
    ) {
      let location = usZips.get(state.locator);
      if (location !== undefined)
        fetchStores(location.longitude, location.latitude);
    } else if (searchResults !== null) {
      setSearchResults(null);
    }
  }, [state.locator]);
  return (
    <form className="z-20 w-full overflow-auto bg-slate-600 p-4">
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-group-name"
          >
            Group Name
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border  bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:bg-white focus:outline-none"
            id="form-group-name"
            name="group_name"
            value={state.group_name}
            onChange={handleChange}
            type="text"
            placeholder="Casual Commander"
          />
        </div>
        <div className="w-full px-3 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-format"
          >
            Format
          </label>
          <div className="relative">
            <select
              className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
              id="form-format"
              name="format"
              value={state.format}
              onChange={handleChange}
            >
              <option>Commander</option>
              <option>Standard</option>
              <option>Pioneer</option>
              <option>Modern</option>
              <option>Legacy</option>
              <option>Casual</option>
              <option>Vintage</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-description"
          >
            Short Description
          </label>
          <input
            className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="form-description"
            name="description"
            value={state.description}
            onChange={handleChange}
            type="text"
            placeholder="Come join us for a fun night of magic"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-time"
          >
            Start Time
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="form-time"
            name="start_time"
            onChange={handleChange}
            value={state.start_time}
            type="time"
          />
        </div>
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="grid-zip"
          >
            Date
          </label>
          <input
            className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="grid-zip"
            name="date"
            onChange={handleChange}
            value={state.date}
            type="date"
          />
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-time"
          >
            Private Venue:
          </label>
          <label className="relative mt-7 flex cursor-pointer items-center">
            <input
              type="checkbox"
              name="private_venue"
              onChange={handleChecked}
              checked={state.private_venue}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
          </label>
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <div className="relative w-full px-3">
          <label
            className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
            htmlFor="form-locator"
          >
            Location
          </label>
          <input
            className=" block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-slate-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="form-locator"
            type="text"
            name="locator"
            value={state.locator}
            onChange={handleChange}
            placeholder="Search Zip Code"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute top-9 right-6 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          {/* store list */}
          <div className=" -bottom-12 ">
            {searchResults &&
              searchResults.map((item: any, i: number) => (
                <button
                  key={i}
                  onClick={(e) => handleChooseStore(e, item)}
                  className="border-grey-700 block w-full cursor-pointer border-2 bg-gray-200 p-2 text-left hover:bg-slate-300"
                >
                  {item.name}
                </button>
              ))}
          </div>
        </div>
      </div>
      <div className="-mx-3 mb-6 flex flex-wrap">
        <button
          onClick={createGroup}
          className="my-3 flex items-center rounded-md bg-slate-800 py-2 px-5 text-white shadow-md shadow-slate-700 hover:bg-slate-700"
        >
          Create Group
        </button>
      </div>
    </form>
  );
}
