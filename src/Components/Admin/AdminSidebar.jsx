import React from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Store, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  Bell,
  LogOut
} from "lucide-react";

const AdminSidebar = ({ isOpen }) => {
  // Replace with real unreadCount logic later if needed
  const unreadCount = 3; // static number for now (you can connect to your context or API)

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
    { name: "User Management", icon: Users, path: "/admin/users" },
    { name: "Restaurants", icon: Store, path: "/admin/restaurants" },
    { name: "Events", icon: Calendar, path: "/admin/events" },
    { name: "Chat Support", icon: MessageSquare, path: "/admin/chats" },
    { name: "Reports", icon: FileText, path: "/admin/reports" },
    { 
      name: "Notifications", 
      icon: Bell, 
      path: "/admin/notifications",
      badge: unreadCount > 0 ? unreadCount : undefined
    },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  return (
    <div
      className={`bg-sidebar fixed h-full transition-all duration-300 ease-in-out z-30 ${
        isOpen ? "w-64" : "w-0 -ml-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="h-16 flex items-center justify-center border-b border-sidebar-border">
          <Link to="/admin" className="flex items-center">
            <span className="text-white text-xl font-bold">Let's Eat Admin</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center justify-between px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors group"
              >
                <div className="flex items-center">
                  <item.icon className="h-5 w-5 mr-3 text-sidebar-primary" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white px-2 py-0.5 text-xs rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-sidebar-border p-4">
          <button className="flex items-center w-full px-4 py-3 text-sidebar-foreground hover:bg-sidebar-accent rounded-md transition-colors">
            <LogOut className="h-5 w-5 mr-3 text-sidebar-primary" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
