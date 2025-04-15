import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';  // Import the ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';  // Import the toast styles
import doctors from "../data/data.json"; // Assuming data contains doctor objects with 'name' property

const AppointmentModal = ({ slot, event, onClose, onSubmit, onDelete }) => {
  const [title, setTitle] = useState("");
  const [doctorName, setDoctorName] = useState("");
  console.log("dr data", doctors);

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
    // Check if either field is empty
    if (!title.trim() || !doctorName.trim()) {
      toast.error("Both Patient Name and Doctor Name are required!");
      return;
    }
  
    const start = event?.start || slot.start;
    const end = event?.end || slot.end;
  
    // Combine Patient Name and Doctor Name in the title
    const eventTitle = `${title}  - Dr. ${doctorName}`;
  
    // Call the onSubmit function to save the event
    onSubmit({ title: eventTitle, doctorName, start, end });
    
    toast.success("Appointment has been booked successfully!");
  };

  const handleDelete = () => {
    onDelete(event.id);
    
    // Show success toast after deleting the appointment
    toast.success("Appointment has been deleted!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h3 className="text-lg font-semibold mb-4">
          {event ? "Edit Appointment" : "Book Appointment"}
        </h3>

        {/* Patient Name input with required attribute */}
        <input
          type="text"
          placeholder="Patient Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
          required
        />

        {/* Doctor Name input with required attribute and datalist for dropdown */}
        <input
          type="text"
          required
          list="doctor-names"
          placeholder="Enter Dr. Name"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
        />
        <datalist id="doctor-names">
          {doctors.map((doctor, index) => (
            <option key={index} value={`${doctor.name.first} ${doctor.name.last}  ( ${doctor.specialty} )`} />
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
            className="bg-gray-300 text-black px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* Toast container that will display notifications */}
      <ToastContainer />
    </div>
  );
};

export default AppointmentModal;
