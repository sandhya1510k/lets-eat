import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailsPage from './RestaurantDetailsPage';

import TakeawayPage from "./TakeawayPage";
import EventsPage from './EventsPage';
import EventDetailsPage from './EventDetailsPage';
import EventRegistrationPage from "./EventRegistrationPage";
import OrderHistoryPage from "./OrderHistoryPage";


const UserRouting = () => (
  <div>
    {/* <UserNavbar /> */}
    <Routes>
      <Route path="restaurent" element={<RestaurantsPage />} />
      <Route path="restaurent/:id" element={<RestaurantDetailsPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="events/:id" element={<EventDetailsPage />} />


      <Route path="events/:id/register" element={<EventRegistrationPage />} />

      <Route path="takeaway" element={<TakeawayPage />} />
      <Route path="order" element={<OrderHistoryPage />} />


    </Routes>
    {/* <Outlet /> */}
  </div>
);

export default UserRouting;
