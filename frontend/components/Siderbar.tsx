import {
    House,
    CreditCard,
    List,
    ChartPie,
    Settings,
    Plus
} from "lucide-react";
import VelaLogo from "./VelaLogo";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-60 flex-col border-r border-[#E8EBE9] bg-[#FAFAF9] px-4 py-7">
      <VelaLogo />
      <nav className="mt-10 space-y-2">
  <div className="flex items-center gap-3 rounded-lg bg-[#EAF0ED] p-3 text-[#24594F]">
    <House size={20} />
    <span>Dashboard</span>
  </div>

  <div className="flex items-center gap-3 p-3 text-gray-600">
    <CreditCard size={20} />
    <span>Accounts</span>
  </div>

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