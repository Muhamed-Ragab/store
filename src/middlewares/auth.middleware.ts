import { betterFetch } from '@better-fetch/fetch';
import { Session, User } from '@prisma/client';
import { NextResponse, type NextRequest } from 'next/server';

export const privateRoutes = ['/dashboard', '/profile'];

export async function authMiddleware(
  request: NextRequest,
  response: NextResponse,
) {
  const { data } = await betterFetch<{ session: Session; user: User }>(
    '/api/auth/get-session',
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    },
  );

  const session = data?.session;

  if (privateRoutes.includes(request.nextUrl.pathname) && !data) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  if (session) {
    response.headers.set('X-Session', session.id);
    response.headers.set('X-User', session.userId);
  }

  if (session && request.nextUrl.pathname.startsWith('/auth')) {
    if (data.user.role === 'admin') {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    } else {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  if (
    session &&
    privateRoutes.includes(request.nextUrl.pathname) &&
    data.user.role !== 'admin'
  ) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}
