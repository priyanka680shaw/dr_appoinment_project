'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Explore = () => {
  const [doctors, setDoctors] = useState([]); // State to store fetched data
  const data = useSelector((state) => state);
  console.log(data);

  useEffect(() => {
    const doctorsData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        console.log("explorer", data);

        // Update the state with fetched data
        setDoctors(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    doctorsData();
  }, []);

  return (
    <div>
      <h1>Explore Doctors</h1>
      
      {/* Rendering the fetched data */}
      <div>
        {doctors.length === 0 ? (
          <p>Loading...</p>
        ) : (
          doctors.map((doctor, index) => (
            <div key={index}>
              <h3>{doctor.name.first} {doctor.name.last}</h3>
              <p>Email: {doctor.email}</p>
              <p>Location: {doctor.location.city}, {doctor.location.country}</p>
              {/* Display other details here */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
