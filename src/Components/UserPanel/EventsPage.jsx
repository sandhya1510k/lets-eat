import React, { useState } from "react";
import EventCard from "./EventCard"; // Make sure this component is also Bootstrap-compatible
import { Search, Calendar, Filter, ChevronDown } from "lucide-react";

// Sample event data
const allEvents = [
    {
        id: "1",
        title: "Italian Wine Tasting & Dinner",
        image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        restaurantName: "Bella Italia",
        date: "June 15, 2023",
        time: "7:00 PM - 10:00 PM",
        location: "123 Main St, Downtown",
        price: "$75",
        spotsLeft: 8,
        description: "Enjoy an evening of fine Italian wines paired with a five-course meal prepared by our award-winning chef."
    },
    {
        id: "2",
        title: "Sushi Making Masterclass",
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        restaurantName: "Sushi Master",
        date: "June 22, 2023",
        time: "6:30 PM - 9:00 PM",
        location: "789 Elm St, Eastside",
        price: "$90",
        spotsLeft: 5,
        description: "Learn the art of sushi making from master sushi chef Tanaka. All ingredients and tools provided."
    },
    {
        id: "3",
        title: "French Pastry Workshop",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        restaurantName: "Le Petit Café",
        date: "June 28, 2023",
        time: "2:00 PM - 5:00 PM",
        location: "456 Oak St, Westside",
        price: "$65",
        spotsLeft: 10,
        description: "Master the art of creating delicate French pastries with our expert pastry chef. Take home your creations and recipe cards."
    },
    {
        id: "4",
        title: "Farm-to-Table Dinner Experience",
        image: "https://images.unsplash.com/photo-1510653919252-33af7f0d14b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        restaurantName: "Green Harvest",
        date: "July 5, 2023",
        time: "6:00 PM - 9:00 PM",
        location: "78 Meadow Lane, Countryside",
        price: "$85",
        spotsLeft: 12,
        description: "Experience a unique dinner prepared with ingredients harvested the same day from our organic farm. Tour the farm before dinner."
    },
    {
        id: "5",
        title: "Cocktail Mixing Class",
        image: "https://images.unsplash.com/photo-1583898350903-99fa829dad3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        restaurantName: "The Speakeasy",
        date: "July 12, 2023",
        time: "7:30 PM - 10:00 PM",
        location: "21 Bourbon St, Downtown",
        price: "$60",
        spotsLeft: 6,
        description: "Learn to mix and craft artisanal cocktails from our expert mixologists. Includes tastings and recipe booklet."
    }
  ];

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = allEvents.filter(event =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="bg-success text-white py-5">
          <div className="container">
            <h1 className="display-5 fw-bold mb-3">Discover Culinary Events</h1>
            <p className="lead mb-4">
              Experience unique dining events, cooking classes, and food festivals
            </p>

            <form onSubmit={handleSearch} className="card p-3 shadow-sm">
              <div className="row g-2 align-items-center">
                <div className="col-auto">
                  <Search size={20} className="text-muted" />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for events or restaurants"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-dark">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <h2 className="h5 mb-0">
                {filteredEvents.length} {filteredEvents.length === 1 ? "Event" : "Events"} Available
              </h2>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary d-flex align-items-center">
                  <Calendar size={16} className="me-2" />
                  Date
                  <ChevronDown size={16} className="ms-2" />
                </button>
                <button className="btn btn-outline-secondary d-flex align-items-center">
                  <Filter size={16} className="me-2" />
                  Filter
                  <ChevronDown size={16} className="ms-2" />
                </button>
              </div>
            </div>

            <div className="row gy-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className="col-12">
                  <EventCard {...event} />
                </div>
              ))}

              {filteredEvents.length === 0 && (
                <div className="text-center py-5">
                  <h3 className="h5 mb-2">No events found</h3>
                  <p className="text-muted">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventsPage;
