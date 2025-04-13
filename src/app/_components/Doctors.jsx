'use client'
import React, { useState, useEffect } from "react";
import doctorsData from "../data/data.json"
//redux
import { useSelector, useDispatch } from "react-redux";
import { setOriginalDrData } from "../redux/slices/doctorsDAta";

export default function Doctors() {
  const drData = useSelector((state) => state.drData.drDAta);
  const drDataDispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    drDataDispatch(setOriginalDrData(doctorsData.doctors));
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!Array.isArray(drData) || drData.length === 0) {
    return <p className="text-center mt-10 text-red-500">No doctors found.</p>;
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {drData.map((doctor) => (
        <div
          key={doctor.id}
          className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between max-w-sm mx-auto"
        >
          <div>
            <img
              src={doctor.picture?.medium}
              alt={`Dr. ${doctor.name?.first} ${doctor.name?.last}`}
              className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
            />
            <h2 className="text-xl font-semibold text-center">
              Dr. {doctor.name?.first} {doctor.name?.last}
            </h2>

            {/* Highlight specialty */}
            <p className="text-center text-sm font-bold text-primary mt-1">
              {doctor.specialty}
            </p>

            <p className="text-center text-gray-600 mt-2">
              {doctor.location?.city}, {doctor.location?.country}
            </p>
            <p className="text-center text-sm text-gray-400">{doctor.email}</p>
            <p className="text-center text-sm text-gray-400">{doctor.phone}</p>
          </div>

          {/* Book Appointment button */}
          <button className="mt-4 self-center bg-primary text-white text-sm px-3 py-1.5 rounded-md hover:bg-primary/90 transition cursor-pointer">
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}
