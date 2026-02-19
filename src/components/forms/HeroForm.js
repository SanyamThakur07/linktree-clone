"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const HeroForm = ({ user }) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if ("localStorage" in window && localStorage.getItem("desiredUsername")) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      router.push("/account?desiredUsername=" + username);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length === 0) {
      setError("Please enter a username");
      return;
    }
    setError("");
    if (user) {
      router.push("/account?desiredUsername=" + username);
    } else {
      window.localStorage.setItem("desiredUsername", username);
      await signIn("google");
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3"
    >
      <div className="flex items-center rounded-lg border-2 border-gray-200 bg-white p-1 shadow-sm focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
        <span className="pl-3 text-sm font-medium text-gray-500">
          linklist.to/
        </span>
        <input
          type="text"
          value={username}
          onChange={handleChange}
          placeholder="username"
          className="flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder-gray-400 focus:ring-0 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          Join for free
        </button>
      </div>
      {error && <p className="text-left text-sm text-red-500">{error}</p>}
    </form>
  );
};
