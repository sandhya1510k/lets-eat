import React, { useState } from "react";
import { Search, MapPin, ShoppingBag, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const takeawayRestaurants = [
  {
    id: "1",
    name: "Bella Italia",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    deliveryFee: "$2.99",
    minOrder: "$15",
  },
  {
    id: "2",
    name: "Spice Garden",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "30-40 min",
    deliveryFee: "$3.49",
    minOrder: "$20",
    promotion: "20% off first order",
  },
  {
    id: "4",
    name: "Burger Joint",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1922&q=80",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    minOrder: "$10",
    promotion: "Free delivery over $25",
  },
  {
    id: "5",
    name: "The Green Leaf",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    cuisine: "Vegan",
    rating: 4.6,
    deliveryTime: "25-40 min",
    deliveryFee: "$3.99",
    minOrder: "$20",
  },
  {
    id: "6",
    name: "Taco Fiesta",
    image:
      "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
    cuisine: "Mexican",
    rating: 4.2,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    minOrder: "$15",
    promotion: "Buy 1 Get 1 Free on Tacos",
  },
  {
    id: "7",
    name: "Golden Dragon",
    image:
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2052&q=80",
    cuisine: "Chinese",
    rating: 4.4,
    deliveryTime: "30-45 min",
    deliveryFee: "$2.99",
    minOrder: "$18",
  },
];

const cuisineTypes = [
  "All",
  "Italian",
  "Indian",
  "American",
  "Vegan",
  "Mexican",
  "Chinese",
];

const TakeawayRestaurantCard = ({ restaurant }) => {
  return (
    <Link to={`/takeaway/${restaurant.id}`} className="text-decoration-none">
      <div className="card h-100 shadow-sm hover-shadow">
        <div className="position-relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="card-img-top"
            style={{ height: "12rem", objectFit: "cover" }}
          />
          {restaurant.promotion && (
            <div
              className="position-absolute bottom-0 start-0 end-0 bg-warning text-white text-center py-1"
              style={{ fontSize: "0.875rem" }}
            >
              {restaurant.promotion}
            </div>
          )}
        </div>
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title text-truncate mb-0">{restaurant.name}</h5>
            <div className="badge bg-danger fs-6">{restaurant.rating}</div>
          </div>

          <span className="badge bg-success mb-3 text-wrap" style={{ fontSize: "0.8rem" }}>
            {restaurant.cuisine}
          </span>

          <div className="d-flex justify-content-between text-secondary small mt-auto">
            <div className="d-flex align-items-center">
              <Clock className="me-1" size={16} />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div>{restaurant.deliveryFee} delivery</div>
          </div>

          <div className="d-flex justify-content-between mt-2">
            <div className="text-muted small">Min. order {restaurant.minOrder}</div>
            <div className="text-danger fw-semibold" role="button">
              Order Now
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const TakeawayPage = () => {
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = takeawayRestaurants.filter((restaurant) => {
    const matchesCuisine =
      selectedCuisine === "All" || restaurant.cuisine === selectedCuisine;
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCuisine && matchesSearch;
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="bg-success text-white py-5">
          <div className="container">
            <h1 className="display-4 fw-bold mb-2">Order Delicious Takeaway</h1>
            <p className="lead mb-4">Get your favorite meals delivered right to your doorstep</p>

            <form className="bg-white rounded p-3 shadow d-flex flex-column flex-md-row align-items-center gap-3">
              <div className="input-group flex-grow-1 border rounded">
                <span className="input-group-text bg-white border-0">
                  <Search size={20} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search for food or restaurants"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="input-group flex-grow-1 flex-md-grow-0 border rounded">
                <span className="input-group-text bg-white border-0">
                  <MapPin size={20} className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Delivery Address"
                  defaultValue="123 Main St, New York, NY"
                />
              </div>

              <button
                type="button"
                className="btn btn-secondary d-flex align-items-center px-4"
              >
                <ShoppingBag size={16} className="me-2" />
                Find Food
              </button>
            </form>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container">
            <div className="mb-4 d-flex flex-wrap gap-2">
              {cuisineTypes.map((cuisine) => (
                <button
                  key={cuisine}
                  type="button"
                  className={`btn ${
                    selectedCuisine === cuisine ? "btn-success" : "btn-outline-secondary"
                  }`}
                  onClick={() => setSelectedCuisine(cuisine)}
                >
                  {cuisine}
                </button>
              ))}
            </div>

            <h2 className="mb-4 fw-semibold">
              {filteredRestaurants.length}{" "}
              {filteredRestaurants.length === 1 ? "Restaurant" : "Restaurants"} Available
              for Takeaway
            </h2>

            <div className="row g-4">
              {filteredRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex"
                >
                  <TakeawayRestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-5">
                <h3>No takeaway restaurants found</h3>
                <p className="text-muted">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TakeawayPage;
