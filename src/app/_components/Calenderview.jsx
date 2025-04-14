"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";
import AppointmentModal from "./AppointmentModal";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("appointments");
    if (stored) setEvents(JSON.parse(stored));
  }, []);

  const saveEvents = (data) => {
    setEvents(data);
    localStorage.setItem("appointments", JSON.stringify(data));
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedSlot(slotInfo);
    setEditEvent(null);
    setModalOpen(true);
  };

  const handleSelectEvent = (event) => {
    setEditEvent(event);
    setModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (editEvent) {
      const updated = events.map((e) =>
        e.id === editEvent.id ? { ...e, ...data } : e
      );
      saveEvents(updated);
    } else {
      const newEvent = {
        id: new Date().getTime(),
        ...data,
      };
      saveEvents([...events, newEvent]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    saveEvents(updated);
    setModalOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md dark:shadow-gray-700 rounded transition-all duration-300">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        Doctor Appointment Calendar
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded p-2">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          style={{ height: 500 }}
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
        />
      </div>

      {modalOpen && (
        <AppointmentModal
          slot={selectedSlot}
          event={editEvent}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default CalendarView;
