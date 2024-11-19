import {
  adminClient,
  inferAdditionalFields,
  usernameClient,
} from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import type { auth } from './auth';

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [
    inferAdditionalFields<typeof auth>(),
    usernameClient(),
    adminClient(),
  ],
});
