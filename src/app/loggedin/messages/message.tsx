
interface Props{
    date:String,
    user:String,
    message:String,
    time:String
}

export default function message({date, user, message, time}:Props) {
    

    return (
        <div className="w-64 mt-4 grid grid-cols-12 grid-rows-[auto auto] col-span-2 gap-2 m-6 shadow-slate-800">
            <div className="h4 row-start-1 font-bold row-span-1 col-start-1 col-end-6 text-sm text-slate-200">{user}</div>
            <div className="h4 row-start-1 row-span-1 col-start-8 col-end-13 text-right text-xs text-slate-200">{time}</div>
            <div className="row-start-2 row-end-3 col-start-2 col-end-13 text-white rounded-lg rounded-tl-none bg-slate-800 border-slate-500 border shadow-sm p-2 ">{message}</div>     
        </div>
    )
}