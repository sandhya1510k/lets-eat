import { useState } from "react";
import {
  CalendarDays,
  Clock,
  UserRound,
  ShoppingBasket,
} from "lucide-react";

const restaurants = [
  {
    id: "1",
    name: "Bella Italia",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?...",
    cuisine: "Italian",
    rating: 4.7,
    price: "$$$",
    location: "123 Main St, Downtown",
    distance: "2.3 km",
    featured: true,
    hasTakeaway: true,
    description:
      "Authentic Italian cuisine in a cozy atmosphere. Our chefs bring the flavors of Italy to your plate with fresh, locally sourced ingredients.",
    openingHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    menu: [
      {
        category: "Appetizers",
        items: [
          {
            name: "Bruschetta",
            price: "$8.99",
            description:
              "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and olive oil",
          },
          {
            name: "Calamari Fritti",
            price: "$12.99",
            description: "Crispy fried calamari served with marinara sauce",
          },
        ],
      },
      {
        category: "Pasta",
        items: [
          {
            name: "Spaghetti Carbonara",
            price: "$14.99",
            description:
              "Classic spaghetti with crispy pancetta, egg, and parmesan cheese",
          },
        ],
      },
    ],
    reviews: [
      {
        user: "John D.",
        rating: 5,
        text: "Amazing food and atmosphere! The spaghetti carbonara was perfect.",
        date: "2023-04-15",
      },
    ],
    phone: "+1 (555) 123-4567",
    website: "www.bellaitalia.com",
    takeawayOptions: ["Pick-up", "Delivery within 5 miles"],
    averageWaitTime: "25-35 minutes",
  },
];

export default function RestaurantDetailsPage() {
  const restaurant = restaurants[0]; // you can change this dynamically
  const [selectedTab, setSelectedTab] = useState("info");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState(restaurant.reviews || []);

  const handleReservation = () => {
    alert(`Reservation made for ${guests} on ${selectedDate} at ${selectedTime}`);
  };

  const handleTakeaway = () => {
    alert("Takeaway order placed successfully!");
  };

  const handleReviewSubmit = () => {
    if (reviewText.trim() !== "") {
      const newReview = {
        user: "You",
        rating: 5,
        text: reviewText,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([...reviews, newReview]);
      setReviewText("");
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-3">{restaurant.name}</h1>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="img-fluid rounded mb-3"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />

      <div className="btn-group mb-4" role="group">
        {["info", "menu", "reservation", "reviews"].map((tab) => (
          <button
            key={tab}
            className={`btn btn-outline-primary ${
              selectedTab === tab ? "active" : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Info */}
      {selectedTab === "info" && (
        <div className="border rounded p-3 bg-light">
          <p><strong>Description:</strong> {restaurant.description}</p>
          <p><strong>Location:</strong> {restaurant.location}</p>
          <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
          <p><strong>Rating:</strong> {restaurant.rating}</p>
          <p><strong>Opening Hours:</strong></p>
          <ul>
            {Object.entries(restaurant.openingHours).map(([day, hours]) => (
              <li key={day}>
                {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Menu */}
      {selectedTab === "menu" && (
        <div>
          {restaurant.menu.map((category) => (
            <div key={category.category} className="mb-4">
              <h5 className="border-bottom pb-1">{category.category}</h5>
              {category.items.map((item, idx) => (
                <div key={idx} className="mb-2">
                  <strong>{item.name}</strong> - {item.price}
                  <p className="text-muted mb-1">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Reservation */}
      {selectedTab === "reservation" && (
        <div className="border rounded p-3 bg-light">
          <div className="mb-3">
            <label className="form-label">
              <CalendarDays className="me-2" size={18} />
              Date
            </label>
            <input
              type="date"
              className="form-control"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <Clock className="me-2" size={18} />
              Time
            </label>
            <input
              type="time"
              className="form-control"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              <UserRound className="me-2" size={18} />
              Guests
            </label>
            <input
              type="number"
              className="form-control"
              value={guests}
              min={1}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <button className="btn btn-success me-2" onClick={handleReservation}>
            Reserve Table
          </button>
          {restaurant.hasTakeaway && (
            <button className="btn btn-warning" onClick={handleTakeaway}>
              <ShoppingBasket size={16} className="me-1" />
              Order Takeaway
            </button>
          )}
        </div>
      )}

      {/* Reviews */}
      {selectedTab === "reviews" && (
        <div className="border rounded p-3 bg-light">
          <h5 className="mb-3">Customer Reviews</h5>
          {reviews.map((review, idx) => (
            <div key={idx} className="mb-3 border-bottom pb-2">
              <strong>{review.user}</strong> ({review.date})<br />
              <p className="mb-1">{review.text}</p>
            </div>
          ))}
          <textarea
            className="form-control mb-2"
            rows="3"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleReviewSubmit}>
            Submit Review
          </button>
        </div>
      )}
    </div>
  );
}