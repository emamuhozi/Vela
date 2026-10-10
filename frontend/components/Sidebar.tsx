"use client";

import { usePathname } from "next/navigation";
import {
    House,
    CreditCard,
    List,
    ChartPie,
    Settings,
    Plus
} from "lucide-react";
import VelaLogo from "./VelaLogo";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="flex min-h-screen w-60 flex-col border-r border-[#E8EBE9] bg-[#FAFAF9] px-4 py-7">
      <VelaLogo />
      <nav className="mt-10 space-y-2">
  <Link
  href="/"
  className={`flex items-center gap-3 rounded-lg p-3 ${
  pathname === "/"
    ? "bg-[#EAF0ED] text-[#24594F]"
    : "text-gray-600 hover:bg-gray-100"
}`}
  >

  <House size={20} />
  <span>Dashboard</span>
</Link>

<Link
  href="/accounts"
    className={`flex items-center gap-3 rounded-lg p-3 ${
  pathname === "/accounts"
    ? "bg-[#EAF0ED] text-[#24594F]"
    : "text-gray-600 hover:bg-gray-100"
}`}>
  <CreditCard size={20} />
  <span>Accounts</span>
</Link>

  <div className="flex items-center gap-3 p-3 text-gray-600">
    <List size={20} />
    <span>Transactions</span>
  </div>

  <div className="flex items-center gap-3 p-3 text-gray-600">
    <ChartPie size={20} />
    <span>Spending</span>
  </div>

  <div className="flex items-center gap-3 p-3 text-gray-600">
    <Settings size={20} />
    <span>Settings</span>
  </div>
</nav>
    <div className="mt-auto border-t border-[#E8EBE9] pt-4">
  <div className="flex items-center gap-3 px-3 py-2 text-[#24594F]">
    <Plus size={20} />
    <span>Add account</span>
  </div>
</div>
    </aside>
  );
}