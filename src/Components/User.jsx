import React, { useState } from 'react';

const UserRestaurantOversight = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', active: true, role: 'Customer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', active: true, role: 'Customer' },
  ]);

  const [staff, setStaff] = useState([
    { id: 1, name: 'Chef Michael', role: 'Chef', email: 'michael@restaurant.com' },
    { id: 2, name: 'Anna Manager', role: 'Manager', email: 'anna@restaurant.com' },
  ]);

  const [roles] = useState(['Admin', 'Manager', 'Staff']);

  const handleToggleUser = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, role: newRole } : user))
    );
  };

  return (
    <div className="p-8 space-y-10 bg-gray-100 min-h-screen px-20 py-10">
      {/* Manage Users */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-red-700 mb-4">Manage Users</h2>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={user.role}
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleToggleUser(user.id)}
                  className={`px-3 py-1 rounded-md text-white ${
                    user.active ? 'bg-red-600' : 'bg-green-600'
                  }`}
                >
                  {user.active ? 'Deactivate' : 'Activate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manage Staff / Restaurant Profiles */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-red-700 mb-4">Restaurant Staff Profiles</h2>
        <div className="space-y-4">
          {staff.map((member) => (
            <div key={member.id} className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-600">Role: {member.role}</p>
                <p className="text-sm text-gray-600">Email: {member.email}</p>
              </div>
              <button className="px-3 py-1 rounded-md bg-red-600 text-white hover:bg-red-700 transition-all">
                Edit Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserRestaurantOversight;
