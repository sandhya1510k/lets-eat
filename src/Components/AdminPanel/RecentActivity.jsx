import React from 'react';

const activities = [
  { id: 1, message: '📌 Booking #1234 has been confirmed' },
  { id: 2, message: '🛒 Order #5678 has been delivered' },
  { id: 3, message: '🏨 Restaurant "Tandoori Nights" added a new menu' },
  { id: 4, message: '👤 New user "john_doe" registered' },
  { id: 5, message: '📆 Table booking #7890 cancelled by user' },
];

const RecentActivity = () => {
  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-primary fw-semibold mb-3">Recent Activity</h5>
        <ul className="list-group list-group-flush">
          {activities.map((activity) => (
            <li
              key={activity.id}
              className="list-group-item d-flex align-items-start border-start border-4 border-primary bg-light rounded mb-2"
            >
              <span className="text-secondary">{activity.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivity;
