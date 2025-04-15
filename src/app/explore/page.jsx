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
    <div className="p-6  min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary dark:text-cyan-400">Explore Doctors</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-cyan-400"
        />
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredDoctors.length === 0 ? (
          <p>No doctors found matching your search.</p>
        ) : (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="border hover:cursor-pointer hover:bg-[#e6f1ff] shadow-lg rounded-2xl p-6 dark:hover:bg-[#1e2939] dark:border-cyan-500">
              {/* Image and Name */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={doctor.picture.medium}
                  alt={doctor.name.first}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">
                    Dr. {doctor.name.first} {doctor.name.last}
                  </h2>
                  <p className="text-primary font-semibold dark:text-cyan-400 ">{doctor.specialty}</p>
                  <p className="text-sm text-gray-500 dark:text-slate-100">{doctor.certification}</p>
                </div>
              </div>

              {/* Details */}
              <div className="text-sm text-gray-700 space-y-1">
                <p className='dark:text-slate-100'><strong>📍</strong> {doctor.location.city}, {doctor.location.country}</p>
                <p className='dark:text-slate-100'><strong>🏠</strong> {doctor.office_address}</p>
                <p className='dark:text-slate-100'><strong>📞</strong> {doctor.phone}</p>
                <p className='dark:text-slate-100'><strong>📧</strong> {doctor.email}</p>
                <p className='dark:text-slate-100'><strong>🕒</strong> {doctor.available_hours}</p>
                <p className='dark:text-slate-100'><strong>🧠</strong> {doctor.years_of_experience} years experience</p>
                <p className='dark:text-slate-100'><strong>🗣️</strong> {doctor.languages_spoken.join(", ")}</p>
              </div>

              {/* Bio */}
              <p className="mt-3 text-sm text-gray-600 italic dark:text-slate-100">
                {doctor.biography}
              </p>

              {/* Book Appointment Button */}
              {/* <button
                onClick={() => handleBookAppointment(`${doctor.name.first} ${doctor.name.last}`)}
                className="w-full mt-4 py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary transition duration-300 dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500"
              >
                Book Appointment
              </button> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
