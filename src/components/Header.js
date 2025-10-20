import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { LogoutButton } from "./buttons/LogoutButton";
import { Button } from "./ui/button";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="mx-auto max-w-screen-2xl border-b px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <span className="text-lg font-bold">LinkList</span>
          </Link>
          <nav className="flex items-center gap-6 font-medium text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contacts"}>Contacts</Link>
          </nav>
        </div>
        <div className="flex items-center">
          {!!session && (
            <>
              <span className="text-muted-foreground">
                Hello, {session.user.name}
              </span>
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
