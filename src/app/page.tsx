'use client'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSessionContext } from '@supabase/auth-helpers-react'

export default function Page() {

    const {supabaseClient}= useSessionContext()


    return(
        <div className="absolute w-1/2 h-1/2 inset-1/2 -translate-x-1/2 -translate-y-1/2">
        <Auth
         redirectTo="http://localhost:3000/loggedin/games"
        supabaseClient={supabaseClient}
        providers={['google']}
        appearance={{ theme: ThemeSupa }}
        theme='dark'
      />
      </div>
    )
}