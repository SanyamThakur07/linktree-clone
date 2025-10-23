"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeroForm = ({ user }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if ("localStorage" in window && localStorage.getItem("desiredUsername")) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      router.push("/account?desiredUsername=" + username);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length > 0) {
      if (user) {
        router.push("/account?desiredUsername=" + username);
      } else {
        window.localStorage.setItem("desiredUsername", username);
        await signIn("google");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="text-md font-medium">
      <span>linklist.to/</span>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
        className="rounded-sm border-2 p-2"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-sm border bg-blue-600 p-2 text-white hover:bg-blue-700"
      >
        Join for free
      </button>
    </form>
  );
};
