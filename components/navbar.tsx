"use client"

import React from 'react';
import HomeIcon from "../public/home.svg";
import ArchitectureIcon from "../public/architecture.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Using usePathname for better readability

const NavBar = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <div className='bg-[#3C3B3A] w-full h-100 p-2 flex items-center justify-center align-bottom bottom-0 gap-20 fixed'>
      <div 
        className='flex flex-col gap-1 items-center cursor-pointer' 
        onClick={() => window.location.href = "/"} // Use window.location.href for a direct navigation
        style={{ opacity: pathname === '/' ? 1 : 0.6 }} // Adjust opacity based on current path
      >
        <Image src={HomeIcon} width={24} height={24} alt='home' />
        <p className='text-[13px] text-white'>Home</p>
      </div>

      <div 
        className='flex flex-col gap-1 items-center cursor-pointer' 
        onClick={() => window.location.href = "/designs"} // Use window.location.href for a direct navigation
        style={{ opacity: pathname === '/designs' ? 1 : 0.6 }} // Adjust opacity based on current path
      >
        <Image src={ArchitectureIcon} width={24} height={24} alt='designs' />
        <p className='text-[13px] text-white'>Designs</p>
      </div>
    </div>
  );
}

export default NavBar;
