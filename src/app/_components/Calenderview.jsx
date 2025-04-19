// src/components/CalendarView.jsx

"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import AppointmentModal from "./AppointmentModal";
import { useDispatch, useSelector } from "react-redux";
import { setCalendarAllAppointments , setCalenderAppointment } from "../redux/slices/addToCatr";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.addToCart.addedAppoinment);
  console.log("eee" , events)
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editEvent, setEditEvent] = useState(null);

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
      console.log("mmmmmmmmmmmmmm" , updated)
      dispatch(setCalendarAllAppointments(updated));
    } else {
      const newEvent = {
        id: new Date().getTime(),
        ...data,
      };
      dispatch(setCalenderAppointment(newEvent));
      console.log("dddddddddd" ,newEvent)
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    const updated = events.filter((e) => e.id !== id);
    dispatch(setCalendarAllAppointments(updated));
    setModalOpen(false);
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 shadow-md rounded">
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
