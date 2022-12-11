// "use client";
import usZips from "us-zips/map";
import Event from "./event";
import supabase from "../../../util/supabase";
import Modal from "./modal";
import NewEventForm from "./newEventForm";
export const revalidate = 1;
let location = usZips.get("95624");

async function getGroups() {
  let { data, error } = await supabase.rpc("search_groups", {
    distance: 100,
    geo: `POINT(${location?.longitude} ${location?.latitude})`,
  });
  console.log(error);
  return { data };
}

export default async function Page() {
  //fetch groups
  console.log("user", !supabase.auth);
  const { data } = await getGroups();
  //set button icon

  const buttonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mr-2 h-5 w-5 fill-none stroke-white"
    >
      <path
        fillRule="evenodd"
        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div>
      <div className="mt-16 mb-16 h-[calc(100vh-theme(space.32))] overflow-y-scroll p-4">
        {data &&
          data.map((group) => (
            <Event
              key={group.id}
              group_name={group.group_name}
              start_date={group.start_date}
              start_time={group.start_time}
              owner_name={group.user_name}
              owner_id={group.owner_id}
              format={group.format}
              description={group.description}
            />
          ))}
        <h2 className="mt-6 text-2xl text-white">
          Don't see what you're looking for?
        </h2>
        <button className="my-3 flex items-center rounded-md bg-slate-800 py-2 px-5 text-white shadow-md shadow-slate-700 hover:bg-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-2 h-5 w-5 fill-white"
          >
            <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
            <path
              fillRule="evenodd"
              d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
              clipRule="evenodd"
            />
          </svg>
          Set up notifications
        </button>
        <Modal buttonIcon={buttonIcon} buttonText={"Create a Group"}>
          <NewEventForm />
        </Modal>
      </div>
    </div>
  );
}
