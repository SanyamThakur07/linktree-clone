import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="mx-auto max-w-screen-2xl border-b px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <spn className="text-lg font-bold">LinkList</spn>
          </Link>
          <nav className="flex items-center gap-6 font-medium text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/contacts"}>Contacts</Link>
          </nav>
        </div>
        <Link href={"/signin"}>
          <Button variant={"outline"}>Sign In</Button>
        </Link>
      </div>
    </header>
  );
}
