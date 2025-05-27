import React, { useState } from "react";

const tableBookings = [
  {
    id: 1,
    name: "John Doe",
    type: "Table",
    detail: "Table 3",
    date: "2025-05-10",
    time: "19:00",
    status: "Pending",
    email: "john@example.com",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Alice Johnson",
    type: "Table",
    detail: "Table 5",
    date: "2025-05-11",
    time: "18:00",
    status: "Pending",
    email: "alice@example.com",
    phone: "2345678901",
  },
  {
    id: 3,
    name: "Mark Lee",
    type: "Table",
    detail: "Table 7",
    date: "2025-05-13",
    time: "20:30",
    status: "Pending",
    email: "mark@example.com",
    phone: "3456789012",
  },
];

const itemOrders = [
  {
    id: 4,
    name: "Michael Scott",
    type: "Item",
    detail: "2x Pizza, 1x Coke",
    date: "2025-05-09",
    time: "17:30",
    status: "Pending",
    email: "michael@example.com",
    phone: "9999999999",
  },
  {
    id: 5,
    name: "Jim Halpert",
    type: "Item",
    detail: "1x Burger, 2x Fries",
    date: "2025-05-10",
    time: "13:00",
    status: "Pending",
    email: "jim@example.com",
    phone: "8888888888",
  },
  {
    id: 6,
    name: "Dwight Schrute",
    type: "Item",
    detail: "3x Soup, 1x Salad",
    date: "2025-05-11",
    time: "14:00",
    status: "Pending",
    email: "dwight@example.com",
    phone: "7777777777",
  },
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState("table");
  const [orders, setOrders] = useState([...tableBookings, ...itemOrders]);

  const handleAccept = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Accepted" } : order
    );
    const acceptedOrder = orders.find((order) => order.id === id);
    setOrders(updatedOrders);
    alert(`✅ Booking for ${acceptedOrder.name} has been accepted.`);
  };

  const handleDecline = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status: "Declined" } : order
    );
    const declinedOrder = orders.find((order) => order.id === id);
    setOrders(updatedOrders);
    alert(`❌ Booking for ${declinedOrder.name} has been declined.`);
  };

  const getFilteredOrders = () => {
    return activeTab === "table"
      ? orders.filter((o) => o.type === "Table")
      : orders.filter((o) => o.type === "Item");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 px-20 py-10">
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setActiveTab("table")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "table"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700 border cursor-pointer"
          }`}
        >
          Table Booking
        </button>
        <button
          onClick={() => setActiveTab("item")}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === "item"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-700 border cursor-pointer"
          }`}
        >
          Item Orders
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">{activeTab} Orders</h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-600">
            <thead className="bg-gray-200 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">{activeTab === "item" ? "Items" : "Details"}</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Time</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getFilteredOrders().map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{order.name}</td>
                  <td className="px-4 py-3">{order.detail}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">{order.time}</td>
                  <td className="px-4 py-3">{order.email}</td>
                  <td className="px-4 py-3">{order.phone}</td>
                  <td className="px-4 py-3 capitalize">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === "Accepted"
                          ? "bg-green-100 text-green-700"
                          : order.status === "Declined"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 space-x-2">
                    {order.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleAccept(order.id)}
                          className="px-3 py-1 text-xs bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => handleDecline(order.id)}
                          className="px-3 py-1 text-xs bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          Decline
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
