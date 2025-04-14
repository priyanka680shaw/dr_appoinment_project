'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

const BookAppointment = () => {
  const appointmentData = useSelector((state) => state.drData.drDAta);
  const dispatch = useDispatch();

  const handleCancel = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="p-6">
      {appointmentData && appointmentData.length > 0 ? (
        appointmentData.map((doctor, indx) => (
          <div
            key={indx}
            className="shadow-md rounded-lg p-4 flex items-center justify-between gap-4 max-w-3xl mx-auto mb-4 border dark:hover:bg-[#1e2939] dark:border-cyan-500"
          >
            {/* Doctor Image */}
            <img
              src={doctor?.picture?.medium}
              alt={doctor?.name?.first}
              className="w-24 h-24 rounded-full object-cover"
            />

            {/* Doctor Info */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold dark:text-cyan-400">
                Dr. {doctor?.name?.first} {doctor?.name?.last}
              </h2>
              <p className="text-sm text-gray-600 dark:text-slate-100">{doctor?.specialty}</p>
              <p className="text-sm text-gray-500 dark:text-slate-100">
                {doctor?.location?.city}, {doctor?.location?.country}
              </p>
            </div>

            {/* Cancel Button */}
            <button
              onClick={() => handleCancel(doctor?.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition cursor-pointer"
            >
              Cancel Your Appointment
            </button>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-10 space-y-4 dark:rounded-full">
          <Image
            src="/addtocart.png"
            alt="No Appointments"
            width={400}
            height={200}
          />
          <p className="text-lg text-primary font-bold text-center max-w-md dark:text-cyan-400">
            "Taking care of yourself is the most powerful way to begin caring for others. Book your appointment today!"
          </p>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
