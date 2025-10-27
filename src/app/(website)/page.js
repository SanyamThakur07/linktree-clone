import { HeroForm } from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="pt-25">
      <div className="flex max-w-md flex-col gap-4">
        <h1 className="text-5xl font-extrabold">
          Your one link <br /> for everything
        </h1>
        <h2 className="text-lg leading-none text-gray-500">
          Share your links, social profiles, contact info and more on one page
        </h2>
        <HeroForm user={session?.user} />
      </div>
    </div>
  );
}
