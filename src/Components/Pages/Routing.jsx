import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./Home"
import Navbar from './Navbar';
import Footer from './Footer';

import FeatureSection from './FeatureSection';
import UserRouting from './UserRouting';
import SignupPage from "./SignupPage";
import LoginPage from "./LoginPage";


const Routing = () => (
  <div>
   <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/Featuresection" element={<FeatureSection />} />
        <Route path="/user/*" element={<UserRouting />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminRouting />} />

      </Routes>
      <Footer />
  </div>
);

export default Routing;
