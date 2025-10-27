"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import grabUsername from "@/actions/grabUsername";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const UsernameForm = ({ desiredUsername }) => {
  const router = useRouter();
  const [taken, setTaken] = useState(false);

  async function handleSubmit(formData) {
    const result = await grabUsername(formData);

    setTaken(result === false);

    if (result) {
      router.push("/account?created=" + formData.get("username"));
    }
  }
  return (
    <form
      action={handleSubmit}
      className="flex items-center justify-center pt-20"
    >
      <div className="flex max-w-md flex-col items-center gap-2 rounded-sm border bg-white p-6">
        <h1 className="text-2xl font-bold">Grab your user name</h1>
        <h2 className="text-muted-foreground text-sm">Choose your username</h2>
        <Input
          name="username"
          defaultValue={desiredUsername}
          placeholder="username"
          className="mt-7 w-full"
        />
        {taken && (
          <p className="w-full rounded-sm bg-red-200 p-2 text-center font-medium">
            Username is taken
          </p>
        )}
        <Button type="submit" className="w-full font-medium">
          <span>Claim your username</span>
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
};
