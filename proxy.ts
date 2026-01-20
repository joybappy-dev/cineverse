import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  // Check if the request is for the /add-item route
  if (request.nextUrl.pathname === '/add-item') {
    // Get the isLoggedIn cookie
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';

    // If not logged in, redirect to login page
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/add-item'],
};
