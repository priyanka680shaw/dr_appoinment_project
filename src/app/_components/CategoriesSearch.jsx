'use client'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResetDrData , setDrData} from "../redux/slices/doctorsDAta";

const CategoriesSearch = () => {

  const dispatch = useDispatch()
  //searchFunction
  const allData = useSelector((state)=>state.drData.originalDrDAta)
  const [query , setSearchQuery] = useState("")

  function handleSearch(e){
    const query = (e.target.value).toLowerCase().trim();
    setSearchQuery(query)

    if(!Array.isArray(allData) || allData.length === 0) return;

    if(query === ""){
        dispatch(setResetDrData()) // it fills redux dr's data with all dr's data
    }
    else{
      const searchedDoctorData =  allData.filter((doctors , idx)=>{
        return(
          doctors.name.first.toLowerCase().includes(query) ||
          doctors.name.last.toLowerCase().includes(query) ||
          doctors.specialty.toLowerCase().includes(query)
        )
      })
      dispatch(setDrData(searchedDoctorData))
    }
  }

  return (
    <>
      <section>
        <div className="">
          <div className="flex flex-col items-center gap-3">
            <h2 className="font-bold text-4xl text-center">
              Search <span className="text-primary dark:text-cyan-400">Doctors</span>
            </h2>
            <h2 className="text-gray-800 text-xl font-bold text-center dark:text-slate-100">
              Search your <span className="text-primary dark:text-cyan-400">Doctors</span> and Book an Appointment
            </h2>
            
            {/* Search Bar */}
            <div className="mb-6 flex justify-center w-full px-4 sm:px-0">
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={query}
                onChange={handleSearch}
                className="w-full max-w-xxl p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary md:w-[600px] dark:focus:ring-cyan-400 dark:text-slate-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSearch;
