import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  //react

    const navigate =  useNavigate();
    const handleNavigate = ()=>{
        navigate('/login')
    }

    const [showMenu,setShowMenu] = useState(false);
    const [token,setToken] = useState(true);
    const mainMenuItems = [

        {buttonName:'HOME',path:'/'},
        {buttonName:'ALL DOCTORS',path:'/doctors'},
        {buttonName:'ABOUT',path:'/about'},
        {buttonName:'CONTACT',path:'/contact'},
    ]

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-4'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
        {
                    mainMenuItems.map((item, index) => (
                        <NavLink 
                            key={index} 
                            to={item.path} 
                            className={({ isActive }) => 
                                isActive ? 'active' : ''
                            }
                        >
                            <li className='py-1'>{item.buttonName}</li>
                            {/** This hr can also be styled conditionally if needed */}
                            <hr className={`border-none outline-none h-0.5 bg-primary w-3/5 m-auto ${item.isActive ? 'block' : 'hidden'}`} />
                        </NavLink>
                    ))
                }
             
        </ul>
      <div className='flex items-center gap-4'>
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                 <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile-pic" /> 
                 <img className='w-2.5 ' src={assets.dropdown_icon}  alt="drop-down-icon" />
                 <div className='absolute top-0 right-0 pt-14  text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ' >
                        <p onClick={()=>navigate('/my-profile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('/my-appointments')} className=' hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=>setToken(false)} className=' hover:text-black cursor-pointer'>LogOut</p>
                    </div>
                 </div>
              </div>  
            :<button  onClick={handleNavigate} className='bg-sky-600 text-white   px-8 py-3 rounded-full font-light hiden md:block '>Create account</button>

        }
      </div>
    </div>
  );
};

export default Navbar;
