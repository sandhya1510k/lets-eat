import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventCard = ({
  id,
  title,
  image,
  restaurantName,
  date,
  time,
  location,
  price,
  spotsLeft,
  description,
}) => {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="row g-0">
        <div className="col-lg-4">
          <img
            src={image}
            alt={title}
            className="img-fluid h-100 object-fit-cover rounded-start"
            style={{ minHeight: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <div>
              <div className="d-flex justify-content-between align-items-start mb-2">
                <h5 className="card-title fw-bold">{title}</h5>
                <span className="badge bg-warning text-dark px-3 py-2">
                  {price}
                </span>
              </div>

              <p className="text-danger fw-medium mb-2">{restaurantName}</p>

              <p className="card-text text-muted mb-3" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {description}
              </p>

              <div className="row text-muted mb-4">
                <div className="col-6 d-flex align-items-center mb-2">
                  <Calendar size={16} className="me-2" />
                  <small>{date}</small>
                </div>
                <div className="col-6 d-flex align-items-center mb-2">
                  <Clock size={16} className="me-2" />
                  <small>{time}</small>
                </div>
                <div className="col-6 d-flex align-items-center mb-2">
                  <MapPin size={16} className="me-2" />
                  <small className="text-truncate">{location}</small>
                </div>
                <div className="col-6 d-flex align-items-center mb-2">
                  <Users size={16} className="me-2" />
                  <small>{spotsLeft} spots left</small>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-auto">
              <Link to={`/user/events/${id}`} className="text-danger text-decoration-underline">
                View Details
              </Link>
              <Link to={`/user/events/${id}/register`}>
                <button className="btn btn-danger px-4">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
