import React from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users, ArrowLeft } from "lucide-react";

const events = [
  {
    id: "1",
    title: "Italian Wine Tasting & Dinner",
    image: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    restaurantName: "Bella Italia",
    restaurantId: "1",
    date: "June 15, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "123 Main St, Downtown",
    price: "$75",
    spotsLeft: 8,
    description: "Enjoy an evening of fine Italian wines paired with a five-course meal prepared by our award-winning chef.",
    longDescription: "Join us for an exclusive Italian wine tasting event paired with a carefully crafted five-course meal. Our sommelier will guide you through a selection of premium wines from different regions of Italy...",
    whatToExpect: [
      "Welcome glass of Prosecco upon arrival",
      "Guided tasting of five premium Italian wines",
      "Five-course gourmet dinner",
      "Professional sommelier presentation",
      "Recipe cards to take home",
      "10% discount on wine purchases made during the event"
    ],
    menu: [
      { course: "Antipasti", dish: "Bruschetta", wine: "Pinot Grigio" },
      { course: "Primo", dish: "Tagliatelle with wild mushrooms", wine: "Barbaresco" },
      { course: "Secondo", dish: "Osso Buco", wine: "Chianti" },
      { course: "Insalata", dish: "Arugula salad", wine: "Vermentino" },
      { course: "Dolce", dish: "Tiramisu", wine: "Moscato d'Asti" }
    ]
  }
];

const EventDetailsPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-4">
        <div className="bg-white shadow-sm rounded p-4 w-100" style={{ maxWidth: "500px" }}>
          <h1 className="h4 text-danger mb-3">Event Not Found</h1>
          <p className="text-muted mb-4">The event you are looking for does not exist or has been removed.</p>
          <Link to="/events" className="btn btn-danger">Back to Events</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light">
      {/* Header */}
      <div className="bg-danger text-white py-4 px-4 px-md-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <Link to="/events" className="text-white text-decoration-none d-inline-flex align-items-center mb-2">
              <ArrowLeft size={16} className="me-2" />
              Back to Events
            </Link>
            <h1 className="h3 fw-bold mb-1">{event.title}</h1>
            <p className="mb-0 text-white-50">{event.restaurantName}</p>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to={`/event/${id}/register`} className="btn btn-warning text-dark">
              Register Now
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div
        style={{
          backgroundImage: `url(${event.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          width: "100%"
        }}
      />

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-md-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="h4 mb-3">About This Event</h2>
              <p className="text-muted">{event.longDescription}</p>

              <h3 className="h5 mt-4">What to Expect</h3>
              <ul className="text-muted ps-3 mb-4">
                {event.whatToExpect.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="h5">Menu</h3>
              {event.menu.map((item, idx) => (
                <div key={idx} className="border-bottom pb-2 mb-2">
                  {item.course && <p className="fw-bold mb-1">{item.course}</p>}
                  <p className="mb-0">{item.dish}</p>
                  {item.wine && <small className="text-muted">Wine pairing: {item.wine}</small>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-md-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <div className="mb-2 d-flex align-items-center text-dark">
                <Calendar size={18} className="me-2" />
                <span>{event.date}</span>
              </div>
              <div className="mb-2 d-flex align-items-center text-dark">
                <Clock size={18} className="me-2" />
                <span>{event.time}</span>
              </div>
              <div className="mb-2 d-flex align-items-center text-dark">
                <MapPin size={18} className="me-2" />
                <span>{event.location}</span>
              </div>
              <div className="mb-3 d-flex align-items-center text-dark">
                <Users size={18} className="me-2" />
                <span>Spots Left: {event.spotsLeft}</span>
              </div>
              <div className="h5 fw-bold text-warning">{event.price}</div>
              <Link to={`/event/${id}/register`} className="btn btn-danger w-100 mt-3">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
