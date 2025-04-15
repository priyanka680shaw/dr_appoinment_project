import { useState, useEffect } from 'react';

const AppointmentModal = ({ slot, event, onClose, onSubmit, onDelete }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (event) {
      setTitle(event.title);
    } else {
      setTitle("");
    }
  }, [event]);

  const handleSubmit = () => {
    const start = event?.start || slot.start;
    const end = event?.end || slot.end;
    onSubmit({ title, start, end });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h3 className="text-lg font-semibold mb-4">
          {event ? "Edit Appointment" : "Book Appointment"}
        </h3>

        <input
          type="text"
          placeholder="Patient Name / Purpose"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 w-full mb-4"
        />

        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            {event ? "Update" : "Book"}
          </button>

          {event && (
            <button
              onClick={() => onDelete(event.id)}
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
    </div>
  );
};

export default AppointmentModal;
