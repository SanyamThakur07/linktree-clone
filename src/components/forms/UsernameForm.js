"use client";

import { ArrowRight } from "lucide-react";
import { FaLink } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import grabUsername from "@/actions/grabUsername";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const UsernameForm = ({ desiredUsername }) => {
  const router = useRouter();
  const [taken, setTaken] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await grabUsername(formData);

    setTaken(result === false);

    if (result) {
      router.push("/account?created=" + formData.get("username"));
    }
  }
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
            Claim your username
          </h1>
          <p className="mt-2 text-gray-500">
            Choose a unique username for your link page
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="flex items-center rounded-lg border-2 border-gray-200 bg-white focus-within:border-blue-500">
                <span className="pl-3 text-sm font-medium text-gray-500">
                  linklist.to/
                </span>
                <Input
                  name="username"
                  defaultValue={desiredUsername}
                  placeholder="username"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
            </div>

            {taken && (
              <p className="rounded-md bg-red-50 p-3 text-center text-sm font-medium text-red-600">
                Username is already taken. Please try another.
              </p>
            )}

            <Button
              type="submit"
              className="flex w-full items-center justify-center gap-2 bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <span>Claim username</span>
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          Your page will be available at linklist.to/yourusername
        </p>
      </div>
    </div>
  );
};
