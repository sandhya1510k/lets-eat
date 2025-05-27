import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard"; // Ensure this component also uses Bootstrap
import { Search, MapPin, Filter, ChevronDown } from "lucide-react";

const restaurants = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=2076&q=80",
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
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2074&q=80",
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
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=2070&q=80",
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
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1922&q=80",
    cuisine: "American",
    rating: 4.3,
    price: "$$",
    location: "101 Pine St, Northside",
    distance: "0.9 km",
    hasTakeaway: true
  },
  {
    id: "5",
    name: "The Green Leaf",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=1974&q=80",
    cuisine: "Vegan",
    rating: 4.6,
    price: "$$$",
    location: "202 Cedar St, Southside",
    distance: "1.5 km",
    hasTakeaway: true
  },
  {
    id: "6",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?auto=format&fit=crop&w=1974&q=80",
    cuisine: "Mexican",
    rating: 4.2,
    price: "$$",
    location: "303 Birch St, Westside",
    distance: "2.7 km",
    hasTakeaway: true
  },
  {
    id: "7",
    name: "Golden Dragon",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=2052&q=80",
    cuisine: "Chinese",
    rating: 4.4,
    price: "$$",
    location: "404 Maple St, Downtown",
    distance: "1.2 km",
    hasTakeaway: true
  },
  {
    id: "8",
    name: "Parisian Bistro",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2070&q=80",
    cuisine: "French",
    rating: 4.9,
    price: "$$$$",
    location: "505 Walnut St, Eastside",
    distance: "3.5 km"
  }
];

const cuisineTypes = ["All", "Italian", "Indian", "Japanese", "American", "Vegan", "Mexican", "Chinese", "French"];

const RestaurantsPage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCuisine = selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="container py-5">
      <h1 className="mb-2 fw-bold text-dark fs-3">Find Your Perfect Restaurant</h1>
      <p className="text-muted mb-4">Discover amazing dining experiences and reserve your table today</p>

      <div className="card p-3 mb-4">
        <div className="row gy-3">
          <div className="col-md-4 d-flex align-items-center">
            <Search className="me-2 text-secondary" />
            <input
              type="text"
              className="form-control"
              placeholder="Search restaurants or locations"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="col-md-3 d-flex align-items-center">
            <MapPin className="me-2 text-secondary" />
            <input type="text" className="form-control" defaultValue="New York, NY" />
          </div>

          <div className="col-md-3 d-flex align-items-center">
            <Filter className="me-2 text-secondary" />
            <span className="me-1">Filters</span>
            <ChevronDown className="text-secondary" />
          </div>

          <div className="col-md-2">
            <button className="btn btn-danger w-100">Search</button>
          </div>
        </div>
      </div>

      <div className="mb-4 d-flex flex-wrap gap-2">
        {cuisineTypes.map((cuisine) => (
          <button
            key={cuisine}
            className={`btn ${
              selectedCuisine === cuisine ? "btn-danger text-white" : "btn-outline-secondary"
            } btn-sm`}
            onClick={() => setSelectedCuisine(cuisine)}
          >
            {cuisine}
          </button>
        ))}
      </div>

      <h5 className="mb-3">
        {filteredRestaurants.length} {filteredRestaurants.length === 1 ? "Restaurant" : "Restaurants"} Found
      </h5>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="mb-2">No restaurants found</h4>
          <p className="text-muted">Try adjusting your search or filters</p>
        </div>
      ) : (
        <div className="row">
          {filteredRestaurants.map((restaurant) => (
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-4" key={restaurant.id}>
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantsPage;
