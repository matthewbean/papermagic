"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());


  //handle logging out and redirect to login

  return (
    <html>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Scry Flyer</title>
      </head>
      <body className="bg-slate-600">
        <header className="fixed top-0 left-0 z-10 grid h-16 w-screen place-items-center bg-slate-800 bg-gradient-to-r from-slate-700 to-slate-800 text-center shadow">
          <h1 className="text-3xl font-bold text-white ">
            Kitchen Table Magic
          </h1>
        </header>

        <SessionContextProvider supabaseClient={supabaseClient}>
          {children}
        </SessionContextProvider>
      </body>
    </html>
  );
}
