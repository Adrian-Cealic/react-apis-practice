import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const resp = await axios.get("https://6661d50d63e6a0189febc300.mockapi.io/Events");
        setEvents(resp.data);
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('Failed to fetch events. Please try again later.');
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div>
          {events.map((event, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
