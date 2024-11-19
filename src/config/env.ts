import { loadEnvConfig } from '@next/env';
import { z } from 'zod';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const EnvSchema = z.object({
  DATABASE_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
});

export const Env = EnvSchema.parse(process.env);
