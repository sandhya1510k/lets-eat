import React, { useState } from 'react';
import RestaurantDetail from './RestaurantDetail';
// import 'bootstrap/dist/css/bootstrap.min.css';

const initialRestaurantData = [/* ... your existing data ... */];

const AdminRestaurantsPage = () => {
  const [restaurants] = useState(initialRestaurantData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredRestaurants = restaurants.filter((r) =>
    [r.name, r.owner, r.cuisine, r.location].some((field) =>
      field.toLowerCase().includes(searchTerm)
    )
  );

  const getStatusBadge = (status) => {
    if (status === 'active') return 'success';
    if (status === 'pending') return 'warning';
    if (status === 'suspended') return 'danger';
    return 'secondary';
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Restaurant Management</h2>

      <input
        type="text"
        className="form-control mb-4 w-100 w-md-50"
        placeholder="Search by name, cuisine, owner..."
        onChange={handleSearch}
        value={searchTerm}
      />

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Cuisine</th>
              <th>Location</th>
              <th>Status</th>
              <th>Rating</th>
              <th>Registered On</th>
            </tr>
          </thead>
          <tbody>
            {filteredRestaurants.map((restaurant, index) => (
              <tr key={index} onClick={() => setSelectedRestaurant(restaurant)} style={{ cursor: 'pointer' }}>
                <td>{restaurant.name}</td>
                <td>{restaurant.owner}</td>
                <td>{restaurant.cuisine}</td>
                <td>{restaurant.location}</td>
                <td>
                  <span className={`badge bg-${getStatusBadge(restaurant.status)}`}>
                    {restaurant.status}
                  </span>
                </td>
                <td>{restaurant.rating}</td>
                <td>{restaurant.registered}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedRestaurant && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" onClick={() => setSelectedRestaurant(null)}>
          <div className="modal-dialog modal-lg" role="document" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRestaurant.name} Details</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedRestaurant(null)}></button>
              </div>
              <div className="modal-body">
                <RestaurantDetail restaurant={selectedRestaurant} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedRestaurant(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRestaurantsPage;
