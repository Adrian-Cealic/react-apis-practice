import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestaurantsPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('https://6661acbc63e6a0189feb08c4.mockapi.io/Restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
        setError('Failed to fetch restaurants. Please try again later.');
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Restaurants</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p>Type: {restaurant.type}</p>
              <p>Rating: {restaurant.rating}</p>
              <p>Address: {restaurant.address}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantsPage;
