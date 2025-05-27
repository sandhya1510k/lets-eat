import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from './AdminDashboard';
// import RecentActivity from './RecentActivity';
// import AdminRestaurantsPage from './AdminRestaurantsPage';


const AdminRouting = () => (
  <div>
    <AdminLayout />
    <Routes>

        <Route path="dashboard" element={<AdminDashboard />} />

        {/* <Route path="recentactivity" element={<RecentActivity />} /> */}
        {/* <Route path="restaurants" element={<AdminRestaurantsPage />} /> */}
        

      </Routes>
    {/* <Outlet /> */}
  </div>
);

export default AdminRouting;















        {/* {<Route path="eventdetails" element={<EventDetails />} /> */}


{/* <Route path="menus" element={<MenuPage />} /> */}
        {/* <Route path="dineindata" element={<DineinPage />} /> */}
        {/* <Route path="events" element={<EventsPage />} /> */}
        {/* <Route path="orderspage" element={<OrderPage />} /> */}
        {/* <Route path="revenue" element={<RevenueChat />} /> */}
        {/* <Route path="users" element={<AdminUsers />} /> */}
        {/* <Route path="users/:id" element={<UserDetails />} /> */}
        {/* <Route path="chat" element={<ChatSupport />} /> */} 










// import RevenueChat from './RevenueChart';

        // import MenuPage from './MenuPage';
// import DineinPage from './DineinPage';
// import EventsPage from './EventsPage';
// import AdminUsers from './AdminUsers';
// import OrderPage from './OrderPage'; // Assuming you have this
// import '../AdminStyles/layout.css';
// import UserDetails from './UserDetails';
// import EventDetails from './EventDetails';
// import ChatSupport from './ChatSupport';