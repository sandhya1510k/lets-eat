import React from "react";
import RestaurantCard from "../UserPanel/RestaurantCard";
import { Link } from "react-router-dom";

const featuredRestaurants = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
    cuisine: "Italian",
    rating: 4.7,
    price: "$$$",
    location: "123 Main St, Downtown",
    distance: "2.3 km",
    featured: true,
    hasTakeaway: true
  },
  {
    id: "2",
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    cuisine: "Indian",
    rating: 4.5,
    price: "$$",
    location: "456 Oak St, Westside",
    distance: "1.8 km",
    featured: true,
    hasTakeaway: true
  },
  {
    id: "3",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cuisine: "Japanese",
    rating: 4.8,
    price: "$$$$",
    location: "789 Elm St, Eastside",
    distance: "3.2 km",
    featured: true
  },
  {
    id: "4",
    name: "Burger Joint",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1922&q=80",
    cuisine: "American",
    rating: 4.3,
    price: "$$",
    location: "101 Pine St, Northside",
    distance: "0.9 km",
    hasTakeaway: true
  }
];

const FeatResta = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
           <h2 className="display-5 fw-bold">Featured Restaurants</h2>
          <Link
            to="/user/restaurent"
            className="btn btn-outline-danger"
          >
            View All
          </Link>
        </div>

        <div className="row">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="col-12 col-sm-6 col-lg-3 mb-4">
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatResta;
