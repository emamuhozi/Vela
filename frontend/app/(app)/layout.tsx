import type { ReactNode } from "react";

import Sidebar from "@/components/Sidebar";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}