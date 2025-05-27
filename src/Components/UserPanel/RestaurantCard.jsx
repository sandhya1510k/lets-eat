import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Clock } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  price: string;
  location: string;
  distance?: string;
  isOpen?: boolean;
  featured?: boolean;
  hasTakeaway?: boolean;
}

const RestaurantCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  price,
  location,
  distance,
  isOpen = true,
  featured = false,
  hasTakeaway = false
}: RestaurantCardProps) => {
  return (
    <Link to={`/user/restaurent/${id}`} className="text-decoration-none text-reset">
      <div className="card h-100 shadow-sm border-0 rounded-3 position-relative">
        <div className="position-relative">
          <img 
            src={image} 
            alt={name} 
            className="card-img-top" 
            style={{ height: '200px', objectFit: 'cover' }}
          />
          {featured && (
            <div className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1 fw-semibold small">
              Featured
            </div>
          )}
          {hasTakeaway && (
            <div className="position-absolute bottom-0 end-0 bg-success text-white px-2 py-1 rounded-pill small me-2 mb-2">
              Takeaway
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title text-truncate mb-0">{name}</h5>
            <div className="d-flex align-items-center bg-danger bg-opacity-10 px-2 py-1 rounded">
              <Star size={16} className="text-danger me-1" fill="#FF5A5F" />
              <span className="fw-semibold text-dark">{rating.toFixed(1)}</span>
            </div>
          </div>

          <div className="d-flex align-items-center text-muted small mb-2">
            <span className="me-2 badge bg-light text-dark">{cuisine}</span>
            <span>{price}</span>
          </div>

          <div className="d-flex align-items-center text-muted small mb-2">
            <MapPin size={14} className="me-1" />
            <span className="text-truncate">{location}</span>
            {distance && <span className="ms-auto small text-muted">{distance} away</span>}
          </div>

          <div className="d-flex justify-content-between align-items-center small mt-3">
            <div className="d-flex align-items-center">
              <Clock size={14} className="me-1" />
              <span className={isOpen ? "text-success fw-semibold" : "text-danger fw-semibold"}>
                {isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
            <span className="text-danger fw-semibold">View Details</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
