import React from 'react';
import '../Styles/adashboard.css';
import { FaUser, FaUtensils, FaCalendarCheck, FaShoppingCart } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';
import RecentActivity from "./RecentActivity";

const stats = [
  { icon: <FaUser />, title: 'Total Users', value: '1249' },
  { icon: <FaUtensils />, title: 'Total Restaurants', value: '182' },
  { icon: <FaCalendarCheck />, title: 'Active Events', value: '38' },
  { icon: <FaShoppingCart />, title: 'Pending Issues', value: '1,085' },
];

const bookings = [
  { name: 'Jan', value: 70 }, { name: 'Feb', value: 60 }, { name: 'Mar', value: 80 },
  { name: 'Apr', value: 100 }, { name: 'May', value: 120 }, { name: 'Jun', value: 100 },
  { name: 'Jul', value: 90 }, { name: 'Aug', value: 105 }, { name: 'Sep', value: 125 },
  { name: 'Oct', value: 140 }, { name: 'Nov', value: 130 }, { name: 'Dec', value: 150 }
];

const issues = [
  { name: 'Resolved', value: 85, color: '#28a745' },
  { name: 'Pending', value: 12, color: '#fd7e14' },
  { name: 'Escalated', value: 3, color: '#dc3545' }
];

const AdminDashboard = () => {
  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold text-danger mb-4">Admin Dashboard</h2>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {stats.map((stat, idx) => (
          <div className="col-12 col-sm-6 col-lg-3" key={idx}>
            <div className="card shadow-sm border-0">
              <div className="card-body d-flex flex-column align-items-center text-center">
                <div className="fs-2 text-primary mb-2">{stat.icon}</div>
                <h6 className="fw-semibold">{stat.title}</h6>
                <p className="fs-5 fw-bold text-dark">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="row g-4 mb-4">
        {/* Bar Chart */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="mb-3">Monthly Bookings</h5>
              <BarChart width={600} height={300} data={bookings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0d6efd" />
              </BarChart>
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="mb-3">Issue Status</h5>
              <PieChart width={300} height={300}>
                <Pie
                  data={issues}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {issues.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="mb-3">Recent Activity</h5>
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
