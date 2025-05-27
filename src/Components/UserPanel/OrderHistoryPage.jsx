import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Calendar } from "lucide-react";

const sampleOrders = [
  {
    id: "ORDER123456",
    date: new Date(2025, 4, 14),
    restaurant: "Bella Italia",
    type: "takeaway",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 12.99 },
      { name: "Tiramisu", quantity: 1, price: 6.99 },
    ],
    total: 19.98,
    status: "completed",
  },
  {
    id: "ORDER123457",
    date: new Date(2025, 4, 12),
    restaurant: "Spice Garden",
    type: "takeaway",
    items: [
      { name: "Butter Chicken", quantity: 1, price: 15.99 },
      { name: "Garlic Naan", quantity: 2, price: 3.99 },
    ],
    total: 23.97,
    status: "completed",
  },
  {
    id: "ORDER123458",
    date: new Date(2025, 4, 10),
    restaurant: "Bella Italia",
    type: "reservation",
    reservationDetails: {
      date: "May 10, 2025",
      time: "19:30",
      people: 2,
    },
    status: "completed",
  },
  {
    id: "ORDER123459",
    date: new Date(2025, 5, 1),
    restaurant: "Golden Dragon",
    type: "takeaway",
    items: [
      { name: "Sweet and Sour Chicken", quantity: 1, price: 14.99 },
      { name: "Vegetable Spring Rolls", quantity: 2, price: 4.99 },
    ],
    total: 24.97,
    status: "pending",
  },
];

function formatTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return "Just now";
}

const OrderHistoryPage = () => {
  const [orders] = useState(sampleOrders);
  const [filter, setFilter] = useState("all");

  const filteredOrders =
    filter === "all" ? orders : orders.filter((order) => order.type === filter);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className="bg-dark text-white text-center py-3 fs-4 fw-bold">
        Order History
      </header>

      <main className="flex-grow-1 container my-4">
        <div className="row justify-content-between align-items-start mb-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <h1 className="fs-3 fw-bold">Order History</h1>
            <p className="text-muted">
              View and track your past orders and reservations
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <div className="btn-group" role="group">
              <button
                className={`btn ${
                  filter === "all" ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`btn ${
                  filter === "takeaway" ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => setFilter("takeaway")}
              >
                <ShoppingBag size={16} className="me-1" />
                Takeaway
              </button>
              <button
                className={`btn ${
                  filter === "reservation"
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                onClick={() => setFilter("reservation")}
              >
                <Calendar size={16} className="me-1" />
                Reservations
              </button>
            </div>
          </div>
        </div>

        {filteredOrders.length === 0 ? (
          <div className="border p-5 text-center">
            <ShoppingBag size={40} className="text-secondary mb-3" />
            <h3 className="fw-semibold mb-2">No orders found</h3>
            <p className="text-muted mb-4">
              {filter === "all"
                ? "You haven't placed any orders yet."
                : `You don't have any ${filter} orders yet.`}
            </p>
            <div className="d-flex justify-content-center gap-2">
              <Link to="/restaurants" className="btn btn-primary">
                Browse Restaurants
              </Link>
              <Link to="/takeaway" className="btn btn-outline-secondary">
                Order Takeaway
              </Link>
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column gap-4">
            {filteredOrders.map((order) => (
              <div key={order.id} className="border rounded">
                <div className="bg-light p-3 d-flex justify-content-between flex-wrap gap-3">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <h5 className="mb-0">{order.restaurant}</h5>
                      <span
                        className={`badge ${
                          order.status === "completed"
                            ? "bg-success"
                            : "bg-warning text-dark"
                        }`}
                      >
                        {order.status === "completed" ? "Completed" : "Pending"}
                      </span>
                    </div>
                    <small className="text-muted d-block">
                      <strong>{order.id}</strong> • {formatTimeAgo(order.date)}
                    </small>
                  </div>
                  <div className="align-self-start">
                    {order.type === "takeaway" ? (
                      <Link
                        to={`/takeaway/${
                          order.restaurant === "Bella Italia" ? "1" : "2"
                        }`}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Order Again
                      </Link>
                    ) : (
                      <Link
                        to={`/restaurant/${
                          order.restaurant === "Bella Italia" ? "1" : "2"
                        }`}
                        className="btn btn-outline-secondary btn-sm"
                      >
                        Book Again
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-3">
                  {order.type === "takeaway" ? (
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Item</th>
                            <th className="text-end">Qty</th>
                            <th className="text-end">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.items.map((item, idx) => (
                            <tr key={idx}>
                              <td>{item.name}</td>
                              <td className="text-end">{item.quantity}</td>
                              <td className="text-end">
                                ${item.price.toFixed(2)}
                              </td>
                            </tr>
                          ))}
                          <tr className="fw-bold">
                            <td colSpan="2" className="text-end">
                              Total
                            </td>
                            <td className="text-end">
                              ${order.total.toFixed(2)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="row text-sm">
                      <div className="col-sm-4 mb-2">
                        <div className="text-muted fw-medium">Date</div>
                        <div>{order.reservationDetails.date}</div>
                      </div>
                      <div className="col-sm-4 mb-2">
                        <div className="text-muted fw-medium">Time</div>
                        <div>{order.reservationDetails.time}</div>
                      </div>
                      <div className="col-sm-4 mb-2">
                        <div className="text-muted fw-medium">Party Size</div>
                        <div>
                          {order.reservationDetails.people}{" "}
                          {order.reservationDetails.people === 1
                            ? "person"
                            : "people"}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-4">
        &copy; {new Date().getFullYear()} Let's Eat. All rights reserved.
      </footer>
    </div>
  );
};

export default OrderHistoryPage;
