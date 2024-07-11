import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Hotels = () => {

    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const resp = await axios.get("https://6661b20a63e6a0189feb219f.mockapi.io/Hotels");
                setHotels(resp.data);
            } catch (error) {
                console.log(error);
                setError('Failed to fetch hotels. Please try again later.');
            }

        };
        fetchHotels();
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hotels</h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hotels.map((hotels, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow-md">
                    <h2 className="text-xl font-semibold">{hotels.name}</h2>
                    <p>Rating: {hotels.rating}</p>
                    <p>Address: {hotels.address}</p>
                  </div>
                ))}
              </div>
            )}


        </div>
    )
}

export default Hotels
