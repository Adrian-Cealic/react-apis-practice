import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Explore = () => {
  const [attractions, setAttractions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const resp = await axios.get('https://6661a58b63e6a0189feae927.mockapi.io/Hotels');
        setAttractions(resp.data);
      } catch (error) {
        console.log(error);
        setError('Failed to fetch attractions. Please try again later.');
      }
    };
    fetchAttractions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Atracții Turistice</h1>
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{attraction.name}</h2>
              <p>{attraction.description}</p>
              <p className="text-gray-600">{attraction.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Explore;
