'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setResetDrData , setDrData} from "../redux/slices/doctorsDAta";
const CategoriesSearch = () => {

  const dispatch = useDispatch()
  //searchFunction
  const allData = useSelector((state)=>state.drData.originalDrDAta)
  console.log("allssssss" , allData)
  
  function searchDoctord(e){
    const query = (e.target.value).toLowerCase().trim();

    console.log(query);

    if(!Array.isArray(allData) || allData.length === 0) return;

    if(query === ""){
        dispatch(setResetDrData()) // it fills redux dr's data with all dr's data
        // console.log("no data found")
    }
    else{
      const searchData =  allData.filter((items , idx)=> items.specialty.toLowerCase().includes(query))
      dispatch(setDrData(searchData))
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
            <div className="flex w-full max-w-sm items-center space-x-2">
                
              <Input type="text" placeholder="Search Doctor" className= "text-primary" onChange = {searchDoctord}/>
              {/* <Button type="submit" className= "cursor-pointer"><Search/> Search</Button> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSearch;
