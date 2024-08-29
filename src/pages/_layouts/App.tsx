import { Outlet } from "react-router-dom";

import { Header } from "@/components/Header";

export function AppLayout() {
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}