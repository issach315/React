import React from "react";
import { doctors } from "../assets/assets";
import {  useNavigate } from "react-router-dom";

const TopDoctors = () => {
 const navigate= useNavigate();
  return (
    <div className=" flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book </h1>
      <p className="sm:w-1/3 text-center ">
        Simply broese through our extensive list of Trusted Doctors{" "}
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={ ()=>navigate(`/appointment/${item._id}`)} className=" border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transiton-all duration-500">
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className=" p-4 ">
              <div className=" flex items-center gap-2 text-sm text-center text-green-500 ">
                <p className="w-2 h-2 bg-green-500 rounded-full "> </p>
                <p>Available</p>
              </div>
              <p className=" text-gray-900  text-lg font-medium ">
                {item.name}
              </p>
              <p className=" text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">

        {/* Centering the button */}
        <button className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 hover:shadow-lg transition duration-300">
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
