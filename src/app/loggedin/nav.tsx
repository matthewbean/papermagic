"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path: String | null = usePathname();
  return (
    <nav className="fixed bottom-0 w-full rounded-t-xl bg-slate-700 bg-gradient-to-b bg-gradient-to-r from-slate-700 to-slate-800 shadow-2xl">
      <ul className="flex h-16  justify-center">
        <li className=" relative mx-5 w-20">
          <Link
            className={
              "absolute left-0 flex h-16 w-16 flex-col items-center rounded-full  p-3 transition-all ease-out"
            }
            href={{ pathname: "/loggedin/messages" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={
                "h-6 w-6" +
                (path === "/loggedin/messages"
                  ? " fill-white stroke-white"
                  : " fill-slate-500 stroke-slate-500")
              }
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
            <div
              className={
                "text-center text-xs" +
                (path === "/loggedin/messages"
                  ? " text-white"
                  : " text-slate-500 ")
              }
            >
              Messages
            </div>
          </Link>
        </li>
        <li className=" relative mx-5 w-20">
          <Link
            className={
              "absolute left-0 flex h-16 w-16 flex-col items-center rounded-full  p-3 transition-all ease-out"
            }
            href="/loggedin/games"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                "h-6 w-6" +
                (path === "/loggedin/games"
                  ? " fill-white stroke-white"
                  : " fill-slate-500 stroke-slate-500")
              }
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <div
              className={
                "text-center text-xs" +
                (path === "/loggedin/games"
                  ? " text-white"
                  : " text-slate-500 ")
              }
            >
              Games
            </div>
          </Link>
        </li>
        <li className="relative mx-5 w-20">
          <Link
            className={
              "absolute left-0 flex h-16 w-16 flex-col items-center rounded-full  p-3 transition-all ease-out"
            }
            href="/loggedin/about"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={
                "h-6 w-6" +
                (path === "/loggedin/about"
                  ? " fill-white stroke-white"
                  : " fill-slate-500 stroke-slate-500")
              }
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clipRule="evenodd"
              />
            </svg>
            <div
              className={
                "text-center text-xs" +
                (path === "/loggedin/about"
                  ? " text-white"
                  : " text-slate-500 ")
              }
            >
              Settings
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
