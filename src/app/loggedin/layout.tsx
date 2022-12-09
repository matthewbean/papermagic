"use client"
import Nav from './nav'
import { useSessionContext } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {supabaseClient}= useSessionContext()
  const router = useRouter()
  const logout= async()=>{
    const { error } = await supabaseClient.auth.signOut()
    console.log("Logged Out")
    router.push("/")
  }
  return (
    <div>
      <button className='fixed right-8 top-5 z-10 text-white' onClick={logout}>Logout</button>
        {children}
        <Nav/>
      </div>
  )
}
