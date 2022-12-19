import artwork from "../../../../util/artwork";
interface Props {
  owner_id: string;
  format: string;
  start_time: string;
  start_date: string;
  owner_name: string;
  description: string;
  address: string;
  group_name: string;
  private_venue: Boolean;
  name: string;
}
export default function Event({
  name,
  owner_id,
  address,
  group_name,
  private_venue,
  format,
  start_date,
  start_time,
  description,
}: Props) {
  const date = new Date(start_date);

  let displayDate = () => {
    if (
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      if (date.getDate() === new Date().getDate()) {
        return "Today";
      }
      if (date.getDay() === new Date().getDate() + 1) {
        return "Tomorrow";
      }
    }

    return `${date.getMonth() + 1}/${date.getDate()}`;
  };
  return (
    <div className="mt-4 box-border grid w-full shrink-0 basis-full grid-cols-12 grid-rows-[repeat(auto)] gap-2 lg:basis-5/12 ">
      <img
        className="col-span-4 col-start-1 row-span-5 row-start-1 h-full object-cover"
        src={artwork()}
        alt=""
      />
      <div className="col-span-8 row-span-1 row-start-1 text-xs uppercase text-slate-400">
        {format}
      </div>
      <div className="col-span-8 col-start-5 row-span-1 row-start-2 -mt-2 text-xl font-bold text-slate-50">
        {group_name}
      </div>
      <div className="col-span-8 col-start-5 row-span-1 row-start-3 text-sm text-slate-200">
        {description}
      </div>
      <div className="text-md col-span-8 col-start-5 row-span-1 row-start-4 flex  items-start text-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 25"
          fill="currentColor"
          className="mr-1 h-5 w-5 shrink-0 fill-slate-200"
        >
          <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clipRule="evenodd"
          />
        </svg>
        {displayDate()} -{" "}
        {" " +
          (date.getHours() % 12) +
          ":" +
          (date.getMinutes() > 10
            ? date.getMinutes()
            : "0" + date.getMinutes()) +
          (date.getHours() > 12 ? "PM" : "AM")}
      </div>
      <div className="text-md col-span-8 col-start-5 row-span-1 row-start-5 flex  items-start text-slate-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-5 w-5 shrink-0 fill-slate-200"
        >
          <path
            fillRule="evenodd"
            d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
            clipRule="evenodd"
          />
        </svg>
        {name}-{address}
      </div>
      <div className=" col-span-12 row-span-1 row-start-6 ">
        {false ? (
          <button className="flex w-full items-center justify-center gap-2 rounded bg-slate-800 py-2 px-5 text-white shadow-md shadow-slate-700 hover:bg-slate-800">
            Request to Join
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5 fill-white"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button className="flex w-full items-center justify-center gap-2 rounded bg-slate-800 py-2 px-5 text-center text-white shadow-md shadow-slate-700 hover:bg-slate-800">
            Join Group
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
        )}
      </div>
    </div>
  );
}
