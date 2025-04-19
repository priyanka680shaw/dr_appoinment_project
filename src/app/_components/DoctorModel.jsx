import React from "react";

export default function DoctorModal({ doctor, onClose }) {
  if (!doctor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Profile image */}
        <div className="flex justify-center mb-4">
          <img
            src={doctor.picture.medium}
            alt="Doctor"
            className="w-24 h-24 rounded-full border-2 border-primary object-cover"
          />
        </div>

        {/* Basic Info */}
        <h2 className="text-xl font-bold text-center text-gray-900 dark:text-white">
          Dr. {doctor.name.first} {doctor.name.last}
        </h2>
        <p className="text-center text-primary font-semibold dark:text-cyan-400">
          {doctor.specialty}
        </p>
        <p className="text-center text-sm text-gray-500 dark:text-slate-300 italic">
          {doctor.certification}
        </p>

        {/* Contact and Location */}
        <div className="mt-4 space-y-1 text-sm text-gray-700 dark:text-slate-200">
          <p><strong>📧 Email:</strong> {doctor.email}</p>
          <p><strong>📞 Phone:</strong> {doctor.phone}</p>
          <p><strong>📍 Location:</strong> {doctor.location.city}, {doctor.location.country}</p>
          <p><strong>🏠 Office:</strong> {doctor.office_address}</p>
          <p><strong>🕒 Available:</strong> {doctor.available_hours}</p>
          <p><strong>🧠 Experience:</strong> {doctor.years_of_experience} years</p>
          <p><strong>🗣️ Languages:</strong> {doctor.languages_spoken.join(", ")}</p>
        </div>

        {/* Biography */}
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800 dark:text-white">About Dr. {doctor.name.last}:</h3>
          <p className="text-sm text-gray-600 dark:text-slate-300 italic mt-1">
            {doctor.biography}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
