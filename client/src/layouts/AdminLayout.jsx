import Header from "@/components/admin-view/Header";
import Sidebar from "@/components/admin-view/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <Sidebar />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <Header />
        <main className="flex flex-1 bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
