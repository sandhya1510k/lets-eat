import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

const navLinks = [
  { name: 'Dashboard', path: '/restaurant/dashboard' },
  { name: 'Orders', path: '/restaurent/orders' },
  { name: 'Menu', path: '/restaurant/menu' },
  // { name: 'Events', path: '/restaurant/events' },
  { name: 'Dining', path: '/restaurant/dining' },
  { name: 'Settings', path: '/restaurant/settings' },
];

const Restaurantmenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear any authentication tokens or session data here
    navigate('/');
  };

  return (
    <nav className="px-20 py-5 bg-white drop-shadow-lg flex items-center justify-between">
      <div className="text-2xl font-bold text-red-600">RestoPanel</div>

      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={`text-gray-700 font-medium hover:text-red-700 transition ${
                location.pathname === link.path ? 'text-red-700 underline' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
      >
        <LogOut size={18} />
        Logout
      </button>
    </nav>
  );
};

export default Restaurantmenu;
