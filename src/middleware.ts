import { NextRequest, NextResponse } from 'next/server';
import { authMiddleware } from './middlewares/auth.middleware';
import { configMiddleware } from './middlewares/config.middleware';

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  response.headers.set('Cross-Origin-Embedder-Policy', 'same-origin');

  await configMiddleware();
  return authMiddleware(request, response);
}

export const config = {
  matcher: [
    // Skip Next.js internals, all static files, and API routes, unless found in search params
    '/((?!_next/static|_next/image|favicon.ico|sw.js|api).*)',
  ],
};
