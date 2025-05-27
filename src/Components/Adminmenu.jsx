import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Dashboard', path: '/admin/dashboard' },
  { name: 'User & Restaurent', path: '/admin/userrestaurent' },
  { name: 'Support & Issues', path: '/admin/supportissues' },
  // { name: 'Event Monitoring', path: '/admin/eventmoniter' },
  { name: 'Reports', path: '/admin/reports' },
];

const Adminmenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Clear tokens or session storage if needed
    navigate('/');
  };

  return (
    <div className='px-20 py-2 bg-white drop-shadow-lg'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={logo} alt="company logo" width={70} />
        </div>

        <div className='flex items-center gap-10'>
          <ul className='flex items-center gap-6'>
            {navLinks.map((link, index) => {
              const isActive = location.pathname.startsWith(link.path);
              return (
                <li
                  key={index}
                  className={`list-none cursor-pointer font-medium ${
                    isActive ? 'text-red-600 underline' : 'text-black hover:text-orange-600'
                  }`}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>

          <button
            onClick={handleLogout}
            className='px-5 py-2 border-1 border-white hover:border-orange-700 bg-orange-700 hover:bg-white text-white hover:text-orange-700 rounded-lg cursor-pointer'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminmenu;
