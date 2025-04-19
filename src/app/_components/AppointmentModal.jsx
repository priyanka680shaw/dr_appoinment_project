// src/components/AppointmentModal.jsx

import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import doctors from "../data/data.json";
import "react-toastify/dist/ReactToastify.css";

const AppointmentModal = ({ slot, event, onClose, onSubmit, onDelete }) => {
  const [title, setTitle] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctorInput, setDoctorInput] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.patientName || "");
      setSelectedDoctor(event.doctor || null);

      if (event.doctor) {
        const { name, specialty } = event.doctor;
        setDoctorInput(`${name.first} ${name.last}  ( ${specialty} )`);
      } else {
        setDoctorInput("");
      }
    } else {
      setTitle("");
      setSelectedDoctor(null);
      setDoctorInput("");
    }
  }, [event]);

  const handleDoctorChange = (e) => {
    const value = e.target.value;
    setDoctorInput(value);

    const matchedDoctor = doctors.find((doc) => {
      const fullName = `${doc.name.first} ${doc.name.last}  ( ${doc.specialty} )`;
      return fullName === value;
    });

    setSelectedDoctor(matchedDoctor || null);
  };

  const handleSubmit = () => {
    if (!title.trim() || !selectedDoctor) {
      toast.error("Both Patient Name and Doctor Name are required!");
      return;
    }

    const start = event?.start || slot.start;
    const end = event?.end || slot.end;
    const eventTitle = `${title} - Dr. ${selectedDoctor.name.first} ${selectedDoctor.name.last}`;

    const appointment = {
      title: eventTitle,
      doctor: selectedDoctor,
      patientName: title,
      start,
      end,
    };

    onSubmit(appointment);
    toast.success("Appointment has been booked successfully!");
  };

  const handleDelete = () => {
    onDelete(event.id);
    toast.success("Appointment has been deleted!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-[300px]">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {event ? "Edit Appointment" : "Book Appointment"}
        </h3>

        <input
          type="text"
          placeholder="Patient Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full mb-4 text-black dark:text-white dark:bg-gray-800"
        />

        <input
          type="text"
          list="doctor-names"
          placeholder="Enter Dr. Name"
          value={doctorInput}
          onChange={handleDoctorChange}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full mb-2 text-black dark:text-white dark:bg-gray-800"
        />
        <datalist id="doctor-names">
          {doctors.map((doctor, index) => (
            <option
              key={index}
              value={`${doctor.name.first} ${doctor.name.last}  ( ${doctor.specialty} )`}
            />
          ))}
        </datalist>

        {selectedDoctor && (
          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm text-gray-800 dark:text-gray-200">
            <p>
              <strong>Name:</strong> Dr. {selectedDoctor.name.first}{" "}
              {selectedDoctor.name.last}
            </p>
            <p>
              <strong>Specialty:</strong> {selectedDoctor.specialty}
            </p>
            <p>
              <strong>Email:</strong> {selectedDoctor.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedDoctor.phone}
            </p>
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {event ? "Update" : "Book"}
          </button>

          {event && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          )}

          <button
            onClick={onClose}
            className="bg-gray-300 text-black dark:bg-gray-700 dark:text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentModal;
