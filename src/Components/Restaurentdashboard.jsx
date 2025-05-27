// components/Resturentdashboard.jsx
import React from "react";
import { Calendar, Star, Table } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const reservationsData = [
  { name: "Mon", bookings: 8 },
  { name: "Tue", bookings: 5 },
  { name: "Wed", bookings: 12 },
  { name: "Thu", bookings: 9 },
  { name: "Fri", bookings: 15 },
  { name: "Sat", bookings: 20 },
  { name: "Sun", bookings: 11 },
];

const Resturentdashboard = () => {
  return (
    <div className="p-6 space-y-6 px-20 py-20 bg-gray-100">
      {/* Header */}
      <h1 className="text-3xl font-bold text-red-500">Welcome to Your Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Calendar className="text-blue-600" />
          <div>
            <p className="text-gray-500 text-sm">Bookings Today</p>
            <p className="text-xl font-semibold text-red-600">24</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Table className="text-purple-600" />
          <div>
            <p className="text-gray-500 text-sm">Active Tables</p>
            <p className="text-xl font-semibold text-red-600">12</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow flex items-center gap-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <Star className="text-yellow-500" />
          <div>
            <p className="text-gray-500 text-sm">Avg. Rating</p>
            <p className="text-xl font-semibold text-red-600">4.6</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl p-6 shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-red-500">Weekly Reservations</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={reservationsData}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="bookings" stroke="#EF4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Reservations */}
      <div className="bg-white rounded-xl p-4 shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="text-lg font-semibold mb-2 text-red-500">Recent Reservations</h2>
        <ul className="divide-y text-sm">
          <li className="py-2">John Doe — 2 people at 7:00 PM</li>
          <li className="py-2">Sarah Lee — 4 people at 8:30 PM</li>
          <li className="py-2">Mike Tan — 6 people at 6:00 PM</li>
        </ul>
      </div>
    </div>
  );
};

export default Resturentdashboard;
