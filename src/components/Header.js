import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "./buttons/LogoutButton";
import { Button } from "./ui/button";
import { FaLink } from "react-icons/fa6";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="max-w-screen-2xl border-b px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="flex items-center gap-2 text-blue-600">
            <FaLink className="size-6" />
            <span className="text-lg font-bold">LinkList</span>
          </Link>
          <nav className="flex items-center gap-6 font-medium text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contacts"}>Contacts</Link>
          </nav>
        </div>
        <div className="flex items-center">
          {session && (
            <>
              <Link href={"/account"}>
                <span className="text-muted-foreground">
                  Hello, {session.user.name}
                </span>
              </Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <Link href={"/login"}>
              <Button variant={"outline"}>Sign In</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
