'use client'
import React, { useState, useEffect } from "react";

// Sample doctor data with specialties and body parts associated
const doctorData = {
  "doctors": [
    {
      "id": 1,
      "name": { "first": "Alice", "last": "Johnson" },
      "email": "alice.johnson@example.com",
      "specialty": "Cardiologist",
      "bodyParts": ["Heart", "Arteries", "Veins", "Lungs"],
      "picture": { "medium": "https://randomuser.me/api/portraits/med/women/1.jpg" },
      "location": { "city": "New York", "country": "USA" },
      "phone": "+1 212-555-1234"
    },
    {
      "id": 2,
      "name": { "first": "David", "last": "Smith" },
      "email": "david.smith@example.com",
      "specialty": "Dentist",
      "bodyParts": ["Teeth", "Gums", "Mouth", "Tongue"],
      "picture": { "medium": "https://randomuser.me/api/portraits/med/men/2.jpg" },
      "location": { "city": "San Francisco", "country": "USA" },
      "phone": "+1 415-555-5678"
    },
    {
      "id": 3,
      "name": { "first": "Emily", "last": "Davis" },
      "email": "emily.davis@example.com",
      "specialty": "Orthopedic Surgeon",
      "bodyParts": ["Bones", "Joints", "Muscles", "Ligaments"],
      "picture": { "medium": "https://randomuser.me/api/portraits/med/women/3.jpg" },
      "location": { "city": "Los Angeles", "country": "USA" },
      "phone": "+1 323-555-9101"
    },
    // Add more doctors here...
  ]
};

export default function SpleistDoctord() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpecialty, setSelectedSpecialty] = useState("Cardiologist");

  useEffect(() => {
    // Simulating fetching data
    setDoctors(doctorData.doctors);
    setLoading(false);
  }, []);

  const specialties = [
    "Cardiologist",
    "Dentist",
    "Orthopedic Surgeon"
    // Add more specialties if needed
  ];

  const filteredDoctors = doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Doctors and Specialties</h1>

      {/* Specialty Dropdown */}
      <div className="mb-6">
        <label htmlFor="specialty" className="block text-lg font-medium mb-2">Select Specialty</label>
        <select
          id="specialty"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="block w-full p-2 border rounded-md"
        >
          {specialties.map((specialty, index) => (
            <option key={index} value={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      {/* Display Doctors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={doctor.picture?.medium}
              alt={`Dr. ${doctor.name?.first} ${doctor.name?.last}`}
              className="rounded-full mx-auto mb-4 w-24 h-24 object-cover"
            />
            <h2 className="text-xl font-semibold text-center">
              Dr. {doctor.name?.first} {doctor.name?.last}
            </h2>
            <p className="text-center text-sm text-gray-500">{doctor.specialty}</p>
            <p className="text-center text-gray-600 mt-2">{doctor.location?.city}, {doctor.location?.country}</p>
            <p className="text-center text-sm text-gray-400">{doctor.email}</p>
            <p className="text-center text-sm text-gray-400">{doctor.phone}</p>

            {/* Body Parts */}
            <div className="mt-4">
              <h3 className="font-semibold text-center text-lg">Specialized Body Parts</h3>
              <ul className="list-disc pl-5">
                {doctor.bodyParts.map((part, index) => (
                  <li key={index} className="text-center text-sm text-gray-600">{part}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
