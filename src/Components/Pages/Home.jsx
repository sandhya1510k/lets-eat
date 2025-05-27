import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
// import "./Home.css"; // <-- If using separate CSS
import FeatResta from "./FeatResta"
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

import FeatureSection from "./FeatureSection"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <>
        <Navbar />

        <div
        className="position-relative d-flex align-items-center"
        style={{ height: "600px" }}
        >
        {/* Background Image */}
        <div
            className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
            style={{
            backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
            }}
        ></div>

        <div className="container position-relative text-white z-1">
            <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3 animate-fade-in">
                Discover, Reserve & <span className="text-warning">Enjoy</span>
            </h1>
            <p className="lead mb-4 animate-slide-up">
                Find the perfect dining experience, book a table, or order takeaway from the best local restaurants all in one place.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded shadow p-3 mb-4 animate-slide-up">
                <div className="row g-2 align-items-center">
                <div className="col-md-5 d-flex align-items-center border-end">
                    <Search className="me-2 text-secondary" />
                    <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search restaurants or cuisines"
                    />
                </div>
                <div className="col-md-4">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-warning w-100">Search</button>
                </div>
                </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="d-flex flex-wrap gap-2 animate-slide-up">
                <Link to="/restaurants" className="btn btn-danger">
                Book a Table
                </Link>
                <Link to="/takeaway" className="btn btn-success">
                Order Takeaway
                </Link>
                <Link to="/events" className="btn btn-outline-light">
                Browse Events
                </Link>
            </div>
            </div>
        </div>

        </div>
        <FeatResta />
        <FeatureSection />
        <Testimonials />
        <Footer />


    </>
  );
};

export default Home;
