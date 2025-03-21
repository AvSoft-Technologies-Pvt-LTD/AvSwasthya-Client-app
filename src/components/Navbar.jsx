import React, { useState } from 'react';
import { IoCallOutline, IoChatbubblesOutline } from "react-icons/io5";
import { RiHospitalLine, RiStethoscopeFill, RiHomeOfficeLine, RiArrowDropDownFill } from "react-icons/ri";
import { TbInfoHexagon } from "react-icons/tb";
import logo from '../assets/AV.png';

function Navbar() {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className='bg-white px-6 py-3 text-cyan-700 flex justify-between items-center mx-8 my-5 sticky top-5 rounded-4xl text-lg shadow-lg relative z-50'>
      <div className='flex items-center text-3xl'>
        <img src={logo} className='w-10 h-10 rounded-full' alt='logo' />
        <h1 className='mx-2 font-extrabold flex items-center bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent'>
          A<p className='text-cyan-900'>v</p>
          <span className='text-xl mt-2'>Swastya</span>
        </h1>
      </div>

      <ul className='flex gap-8 font-medium overflow-hidden'>
        <li className='cursor-pointer flex items-center gap-1'><RiHomeOfficeLine /> Home</li>
        <li className='relative cursor-pointer flex items-center gap-1' onMouseEnter={() => toggleDropdown('doctors')} onMouseLeave={() => toggleDropdown(null)}>
          <RiStethoscopeFill /> Doctors <RiArrowDropDownFill />
          {dropdown === 'doctors' && (
            <ul className='absolute bg-white text-cyan-600 py-2 px-4 mt-2 rounded shadow-lg w-44 top-12'>
              <li className='hover:bg-cyan-100 px-2 py-1'>General</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Specialists</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Surgeons</li>
            </ul>
          )}
        </li>
        <li className='relative cursor-pointer flex items-center gap-1' onMouseEnter={() => toggleDropdown('hospitals')} onMouseLeave={() => toggleDropdown(null)}>
          <RiHospitalLine /> Hospitals <RiArrowDropDownFill />
          {dropdown === 'hospitals' && (
            <ul className='absolute bg-white text-cyan-600 py-2 px-4 mt-2 rounded shadow-lg w-44 top-12'>
              <li className='hover:bg-cyan-100 px-2 py-1'>Private</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Government</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Clinics</li>
            </ul>
          )}
        </li>
        <li className='relative cursor-pointer flex items-center gap-1' onMouseEnter={() => toggleDropdown('services')} onMouseLeave={() => toggleDropdown(null)}>
          Services <RiArrowDropDownFill />
          {dropdown === 'services' && (
            <ul className='absolute bg-white text-cyan-600 py-2 px-4 rounded shadow-lg w-44 top-14'>
              <li className='hover:bg-cyan-100 px-2 py-1'>Consultation</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Emergency</li>
              <li className='hover:bg-cyan-100 px-2 py-1'>Pharmacy</li>
            </ul>
          )}
        </li>
      </ul>

      <div className='flex gap-2'>
        {/* <ul className='flex gap-2 text-cyan-700'>
          <li className='bg-cyan-100 rounded-full p-2 flex items-center justify-center'><IoCallOutline size={20} /></li>
          <li className='bg-cyan-100 rounded-full p-2 flex items-center justify-center'><IoChatbubblesOutline size={20} /></li>
          <li className='bg-cyan-100 rounded-full p-2 flex items-center justify-center'><TbInfoHexagon size={20} /></li>
        </ul> */}

         <div className='flex gap-2 font-normal'>

          <button className='text-cyan-600 rounded-4xl border-2 border-cyan-500 px-4 py-1 hover:bg-cyan-50 hover:text-cyan-800  cursor-pointer'>
            login
          </button>
          <button className='bg-cyan-700 rounded-4xl text-cyan-50 px-4 py-1 hover:bg-cyan-800 border-cyan-500 hover:text-white cursor-pointer'>Register</button>
        </div>  
      </div>
    </nav>
  );
}

export default Navbar;
