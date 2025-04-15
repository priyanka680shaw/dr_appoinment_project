import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import doctors from "../data/data.json";

const AppointmentModal = ({ slot, event, onClose, onSubmit, onDelete }) => {
  const [title, setTitle] = useState("");
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
      setDoctorName(event.doctorName || "");
    } else {
      setTitle("");
      setDoctorName("");
    }
  }, [event]);

  const handleSubmit = () => {
    if (!title.trim() || !doctorName.trim()) {
      toast.error("Both Patient Name and Doctor Name are required!");
      return;
    }

    const start = event?.start || slot.start;
    const end = event?.end || slot.end;
    const eventTitle = `${title} - Dr. ${doctorName}`;

    onSubmit({ title: eventTitle, doctorName, start, end });
    toast.success("Appointment has been booked successfully!");
  };

  const handleDelete = () => {
    onDelete(event.id);
    toast.success("Appointment has been deleted!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg w-[300px] transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          {event ? "Edit Appointment" : "Book Appointment"}
        </h3>

        <input
          type="text"
          placeholder="Patient Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full mb-4 text-black dark:text-white dark:bg-gray-800"
          required
        />

        <input
          type="text"
          required
          list="doctor-names"
          placeholder="Enter Dr. Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 p-2 w-full mb-4 text-black dark:text-white dark:bg-gray-800"
        />
        <datalist id="doctor-names">
          {doctors.map((doctor, index) => (
            <option
              key={index}
              value={`${doctor.name.first} ${doctor.name.last}  ( ${doctor.specialty} )`}
            />
          ))}
        </datalist>

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
