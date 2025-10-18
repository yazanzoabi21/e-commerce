"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="admin-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="admin-main">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="admin-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export { Navbar, Sidebar };
