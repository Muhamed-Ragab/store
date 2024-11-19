import prisma from '@/database/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { admin } from 'better-auth/plugins';

export const auth = betterAuth({
  appName: 'store',
  database: prismaAdapter(prisma, {
    provider: 'sqlite',
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    updateAge: 60 * 60 * 24 * 30, // 30 days
  },
  advanced: {
    cookies: {
      session_token: {
        name: 'NEXT_SESSION',
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  plugins: [admin()],
});

export type User = typeof auth.$Infer.Session.user;
export type Session = typeof auth.$Infer.Session.session;
