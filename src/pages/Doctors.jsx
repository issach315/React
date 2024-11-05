import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';


const Doctors = () => {
  const {speciality } = useParams();

 const {doctors}    = useContext(AppContext);

const [filterDoctors, setFilterDoctors] = useState([]);

const applyFilter = ()=>{
  if(speciality){
    setFilterDoctors(doctors.filter(doc => doc.speciality === speciality ))
  }
  else{
    setFilterDoctors(doctors)
  }
}

useEffect(()=>{
    applyFilter();
},[doctors,speciality])


  
  return (
    <div>
        <p className=" text-gray-600">Browse Through The Doctors Specialist </p>
        <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
          <div className=' flex flex-col  gap-4 text-sm text-gray-600'>
            <p onClick={ ()=> speciality === 'General physician' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>General Physician </p>
            <p onClick={ ()=> speciality === 'Gynecologist' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>Gynecologist </p>
            <p onClick={ ()=> speciality === 'Deramatolagist' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>Deramatolagist </p>
            <p onClick={ ()=> speciality === 'pediatricians' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>pediatricians</p>
            <p onClick={ ()=> speciality === 'Neurologist' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>Neurologist </p>
            <p onClick={ ()=> speciality === 'Gastroenterologist' ? navigate('/doctors'): navifate('/doctors/')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 py-1.5 border border-gray-300 rounded transition-all cursor=-pointer `}>Gastroenterologist </p>
          </div>
          <div className=' w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
                filterDoctors.map((item, index) => (
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
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors