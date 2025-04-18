import { NextResponse } from 'next/server';
import { authMiddleware } from './middleware/auth';
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/i18n/routing'
const i18n = createMiddleware(routing);

export default async function middleware(req) {
  

  const authResponse = await authMiddleware(req);

  if (authResponse == 'next') {
    return i18n(req)
  }
  
  return authResponse;
 

}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",

  
};