import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function authMiddleware(req) {
  const token = await getToken({ req });

  const { pathname } = req.nextUrl;
  
  const privatePaths = ['/dashboard', '/admin' , '/api/auth'];
  
  if (!token && privatePaths.some(path => pathname.startsWith(path))) {
    const loginUrl = new URL('/en/auth/login', req.url);

    return NextResponse.redirect(loginUrl);
  }

  if (token && ['/login', '/register'].some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/', req.url));
  }


  return 'next'

  return NextResponse.next();
}

