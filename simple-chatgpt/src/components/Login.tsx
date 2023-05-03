'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
        <button onClick={() => signIn('google')} className="">
            Sign In to use Simple ChatGPT
        </button>
    </div>
  )
}

export default Login