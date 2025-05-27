







import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="d-flex min-vh-100 bg-light">
      {/* Sidebar */}
      <div
        className={`position-fixed top-0 start-0 h-100 bg-dark text-white transition-all ${
          sidebarOpen ? "d-block" : "d-none"
        }`}
        style={{ width: "250px", zIndex: 1040 }}
      >
        <AdminSidebar isOpen={sidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 d-flex flex-column"
        style={{ marginLeft: sidebarOpen ? "250px" : "0", transition: "margin-left 0.3s ease-in-out" }}
      >
        <AdminHeader toggleSidebar={toggleSidebar} />
        <main className="flex-grow-1 p-4 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
