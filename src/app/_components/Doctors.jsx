"use client";
import React, { useState, useEffect } from "react";
import doctorsData from "../data/data.json";
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
    drDataDispatch(setOriginalDrData(doctorsData));
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
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
      {drData.map((doctor) => (
        <div
          key={doctor.id}
          className="border p-4 hover:bg-[#e6f1ff]  cursor-pointer nrounded shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between max-w-sm mx-auto  dark:hover:bg-[#1e2939] dark:border-cyan-500"
        >
          <div>
            {doctor.picture?.medium ? (
              <img
                src={doctor.picture.medium}
                alt={`Dr. ${doctor.name?.first}`}
                className="rounded-full mx-auto mb-4 w-24 h-24 object-cover bg-primary/40 text-center"
              />
            ) : (
              <div className="rounded-full mx-auto mb-4 w-24 h-24 flex items-center justify-center bg-blue-500 text-white text-lg font-bold">
                {doctor.name?.first?.charAt(0)}
                {doctor.name?.last?.charAt(0)}
              </div>
            )}

            <h2 className="text-xl font-semibold text-center dark:text-slate-300">
              Dr. {doctor.name?.first} {doctor.name?.last}
            </h2>

            {/* Highlight specialty */}
            <p className="text-center text-sm font-bold text-primary mt-1 dark:text-slate-100">
              {doctor.specialty}
            </p>

            <p className="text-center text-gray-900 mt-2 dark:text-slate-100">
              {doctor.location?.city}, {doctor.location?.country}
            </p>
            <p className="text-center text-sm text-gray-800 dark:text-slate-100">{doctor.email}</p>
            <p className="text-center text-sm text-gray-800 dark:text-slate-100">{doctor.phone}</p>
          </div>

          {/* Book Appointment button */}
          <button className="mt-4 self-center bg-primary text-white text-sm px-3 py-1.5 rounded-md hover:bg-primary/90 transition cursor-pointer dark:text-slate-100 dark:bg-[#007dfc] dark:hover:bg-cyan-500 ">
            Book Appointment
          </button>
        </div>
      ))}
    </div>
  );
}
