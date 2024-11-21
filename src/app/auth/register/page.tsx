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
import { RegisterForm } from './components/RegisterForm';

export default function Register() {
  return (
    <main className="container flex min-h-[75vh] items-center justify-center pt-16">
      <Card className="mx-auto sm:w-[400px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your data below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?
            <Button asChild variant="link">
              <Link href="/auth/login">Sign in</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </main>
  );
}
