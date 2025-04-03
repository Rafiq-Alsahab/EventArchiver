'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button onClick={() => signIn('google')} className="btn">
        Sign in with Googlessssss
      </button>
      <button onClick={() => signIn('facebook')} className="btn mt-4">
        Sign in with Facebook
      </button>
      <button onClick={() => signIn('instagram')} className="btn mt-4">
        Sign in with Instagram
      </button>
    </div>
  );
}
