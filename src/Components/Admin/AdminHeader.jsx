import React from "react";
import { Bell, Menu, Search, User } from "lucide-react";

const AdminHeader = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-bottom d-flex align-items-center px-4 position-sticky top-0 z-2" style={{ height: "64px" }}>
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="btn btn-light me-3 d-flex align-items-center justify-content-center p-2"
      >
        <Menu size={20} />
      </button>

      {/* Search Bar */}
      <div className="flex-grow-1 d-flex align-items-center">
        <div className="position-relative w-100" style={{ maxWidth: "300px" }}>
          <div className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
            <Search size={16} />
          </div>
          <input
            type="search"
            className="form-control ps-5 pe-3 py-2"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* Notification + User Profile */}
      <div className="d-flex align-items-center gap-3 ms-3">
        {/* Notification Button */}
        <button className="btn btn-light position-relative p-2">
          <Bell size={20} />
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle"
            style={{ width: "8px", height: "8px" }}
          />
        </button>

        {/* User Info */}
        <div className="d-flex align-items-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
            <User size={20} className="text-secondary" />
          </div>
          <span className="ms-2 d-none d-md-inline fw-medium text-dark">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
