import { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { LoginForm } from './components/LoginForm';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function Login() {
  return (
    <main className="container flex min-h-[75vh] items-center justify-center pt-16">
      <Card className="mx-auto sm:w-[400px]">
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>Enter your data below to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?
            <Button asChild variant="link">
              <Link href="/auth/register">Sign up</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
