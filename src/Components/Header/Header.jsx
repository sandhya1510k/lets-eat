
import React from 'react';
// import UserNavbar from "./UserNavbar";
import RestaurentLayout from "../Restaurent/RestaurentLayout";
import AdminLayout from "../Admin/AdminLayout";

import Navbar from "./Navbar";
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const isUserPanel = location.pathname.startsWith('/user/');
    const isRestaurentPanel = location.pathname.startsWith('/restaurent/');
    const isAdminPanel = location.pathname.startsWith('/admin/');

    return (
        <div>
            {isUserPanel ? (
                <AdminLayout />
            ) : isRestaurentPanel ? (
                <RestaurentLayout />
            ) : !isAdminPanel ? (  
                <Navbar />
            ) : null}
        </div>
    );
};

export default Header;
