"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="flex max-w-md flex-col items-center gap-1 rounded-md border bg-white px-10 py-5">
        <h1 className="text-2xl font-bold"> Create your Account</h1>
        <h2 className="text-muted-foreground pb-6 text-sm">
          {" "}
          Sign in to your account
        </h2>
        <Button
          className="flex w-full cursor-pointer items-center p-5 text-lg font-medium"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <FaGoogle className="mr-1" />
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}
