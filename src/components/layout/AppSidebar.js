"use client";

import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa6";
import { LogoutButton } from "@/components/buttons/LogoutButton";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <div className="flex flex-grow flex-col justify-between">
      <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-2">
        <Link
          href={"/account"}
          className={`flex items-center gap-2 rounded-md px-4 py-2 transition-colors ${
            path === "/account"
              ? "text-blue-500"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <IoDocumentText size={25} />
          <span> My Page</span>
        </Link>
        <Link
          href={"/analytics"}
          className={`flex items-center gap-2 rounded-md px-4 py-2 transition-colors ${
            path === "/analytics"
              ? "text-blue-500"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <FaChartLine size={22} />
          <span> Analytics</span>
        </Link>
      </div>
      <LogoutButton />
    </div>
  );
}
