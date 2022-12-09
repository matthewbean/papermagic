// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.cookies.get('supabase-auth-token')){
    if (request.nextUrl.pathname==='/'){
      return NextResponse.redirect(new URL('/loggedin/games', request.nextUrl.origin))
    }
  }
  else if (request.nextUrl.pathname.includes('/loggedin')){
      return NextResponse.redirect(new URL('/', request.nextUrl.origin))
  }

}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/loggedin/:path*',
// }