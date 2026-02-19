import { HeroForm } from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { FaLink } from "react-icons/fa6";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      <div className="w-full max-w-xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <FaLink className="size-8 text-blue-600" />
          </div>
        </div>
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900">
          Your one link <br />
          <span className="text-blue-600">for everything</span>
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-gray-500">
          Share your links, social profiles, contact info and more on one
          beautiful page.
        </p>
        <div className="flex justify-center">
          <HeroForm user={session?.user} />
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Join thousands of creators sharing their links
        </p>
      </div>
    </div>
  );
}
