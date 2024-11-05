import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr]  gap-14  my-10 mt-40 text-sm '>
            {/* ----left section  ----  */}
            <div>
                <img className='mb-5 w-40 ' src={assets.logo} alt="" />
                <p className='w-fill md:w-2/3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga nostrum tenetur dolores 
                    esse? Dicta quisquam sit quae perferendis. Non cum cumque placeat, hic explicabo eaque. Tenetur unde asperiores fugit?</p>
            </div>

            {/* ---Center Section ---- */}
            <div>

                <p className='text-xl font-medium  mb-5 '>COMPANY</p>
                <ul className="flex flex-col gap-2 text-gray-600 ">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy policy</li>
                </ul>

            </div>

            {/* ----Right section */}
            <div>
                <p className='text-xl font-medium  mb-5 '>GET IN TOUCH </p>
                <ul className="flex flex-col gap-2 text-gray-600 ">
                    <li>+930 2393 2393 2393</li>
                    <li>priscriptoServices@example.com</li>
                </ul>
            </div>
        </div>

        {/* ----copy rigth text ----- */}
        <div>
            <hr /> 
            <p className='py-5 text-sm text-center '>CopyRigth 2024@ Prescripto -All  Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer