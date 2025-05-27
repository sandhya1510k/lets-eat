import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          <div>
            <h5 className="fw-bold mb-3">Let's Eat</h5>
            <p className="text-white  ``">
              Connecting food lovers with amazing dining experiences.
            </p>
          </div>

          <div>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none d-block mb-1">Home</Link></li>
              <li><Link to="/restaurants" className="text-white text-decoration-none d-block mb-1">Restaurants</Link></li>
              <li><Link to="/events" className="text-white text-decoration-none d-block mb-1">Events</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><Link to="/help" className=" text-white text-decoration-none d-block mb-1">Help Center</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none d-block mb-1">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-white text-decoration-none d-block mb-1">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h6 className="fw-bold mb-3">Join Us</h6>
            <ul className="list-unstyled text-white">
              <li><Link to="/login" className=" text-white text-decoration-none d-block mb-1">User Login</Link></li>
              <li><Link to="/restaurant/login" className="text-white text-decoration-none d-block mb-1">Restaurant Login</Link></li>
              <li><Link to="/signup" className="text-white text-decoration-none d-block mb-1">Sign Up</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-top mt-5 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-white mb-2 mb-md-0">&copy; {new Date().getFullYear()} Let's Eat. All rights reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-white fs-5"><FaFacebook /></a>
            <a href="#" className="text-secondary fs-5"><FaTwitter /></a>
            <a href="#" className="text-secondary fs-5"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
