'use client'
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setResetDrData , setDrData} from "../redux/slices/doctorsDAta";
const CategoriesSearch = () => {

  const dispatch = useDispatch()
  //searchFunction
  const allData = useSelector((state)=>state.drData.originalDrDAta)
  // console.log("allssssss" , allData)
  const [query , setSearchQuery] = useState("")
  function handleSearch(e){
    const query = (e.target.value).toLowerCase().trim();
    setSearchQuery(query)

    console.log(query);

    if(!Array.isArray(allData) || allData.length === 0) return;

    if(query === ""){
        dispatch(setResetDrData()) // it fills redux dr's data with all dr's data
        // console.log("no data found")
    }
    else{
      const searchedDoctorData =  allData.filter((doctors , idx)=>{
        return(
          doctors.name.first.toLowerCase().includes(query)||
          doctors.name.last.toLowerCase().includes(query)||
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
            <h2 className="font-bold text-4xl">
              Search <span className="text-primary">Doctors</span>
            </h2>
            <h2 className="text-gray-400 text-xl font-bold">
              Search your <span className="text-primary">Doctors</span> and Book
              Appoinment
            </h2>
            {/* Search Bar */}
      <div className="mb-6 flex justify-center ">
        <input
          type="text"
          placeholder="Search by name or specialty..."
          value={query}
          onChange={handleSearch}
          className="w-full max-w-xxl p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary md:w-[600px]"
        />
      </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSearch;
