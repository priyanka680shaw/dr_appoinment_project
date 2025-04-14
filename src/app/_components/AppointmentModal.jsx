import { useState, useEffect } from "react";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-[300px] text-gray-900 dark:text-white transition-all duration-300">
        <h3 className="text-lg font-semibold mb-4">
          {event ? "Edit Appointment" : "Book Appointment"}
        </h3>

        <input
          type="text"
          placeholder="Patient Name / Purpose"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 w-full mb-4 rounded"
        />

        <div className="flex justify-between space-x-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            {event ? "Update" : "Book"}
          </button>

          {event && (
            <button
              onClick={() => onDelete(event.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          )}

          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-black dark:text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
