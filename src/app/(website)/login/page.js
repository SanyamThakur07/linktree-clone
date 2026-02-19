"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaLink } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
              <FaLink className="size-6 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Create your Account
          </h1>
          <p className="mt-2 text-gray-500">
            Sign in to start building your link page
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
          <Button
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white py-3 text-base font-medium text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900"
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FaGoogle className="size-5" />
            <span>Continue with Google</span>
          </Button>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>By continuing, you agree to our Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
