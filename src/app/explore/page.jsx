'use client';
import React, { useEffect, useState } from 'react';
import drData from "../data/data.json";
import { useSelector } from 'react-redux';

const Explore = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const data = useSelector((state) => state);

  useEffect(() => {
    setDoctors(drData); // Load doctors from local data
  }, []);

  const handleBookAppointment = (doctorName) => {
    alert(`You have booked an appointment with Dr. ${doctorName}`);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredDoctors = doctors.filter((doctor) => {
    return (
      doctor.name.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.name.last.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">Explore Doctors</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredDoctors.length === 0 ? (
          <p>No doctors found matching your search.</p>
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white hover:bg-[#e6f1ff] shadow-lg rounded-2xl p-6">
              {/* Image and Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={doctor.picture.medium}
                  alt={doctor.name.first}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Dr. {doctor.name.first} {doctor.name.last}
                  </h2>
                  <p className="text-primary font-semibold">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500">{doctor.certification}</p>
                </div>
              </div>

              {/* Details */}
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>📍</strong> {doctor.location.city}, {doctor.location.country}</p>
                <p><strong>🏠</strong> {doctor.office_address}</p>
                <p><strong>📞</strong> {doctor.phone}</p>
                <p><strong>📧</strong> {doctor.email}</p>
                <p><strong>🕒</strong> {doctor.available_hours}</p>
                <p><strong>🧠</strong> {doctor.years_of_experience} years experience</p>
                <p><strong>🗣️</strong> {doctor.languages_spoken.join(", ")}</p>
              </div>

              {/* Bio */}
              <p className="mt-3 text-sm text-gray-600 italic">
                {doctor.biography}
              </p>

              {/* Book Appointment Button */}
              <button
                onClick={() => handleBookAppointment(`${doctor.name.first} ${doctor.name.last}`)}
                className="w-full mt-4 py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition duration-300"
              >
                Book Appointment
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
