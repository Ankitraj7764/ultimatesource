import React from 'react';
import {BiSearchAlt2, BiSearch, BiHome, BiBookReader, BiUser, BiLogOut, BiBell } from 'react-icons/bi';

const SideNavbar = () => {
  return (
    <div className="h-screen w-8  flex flex-col justify-between">
     
      <div className="flex flex-col">
        <div className="text-sm "><img src={require("../components/icon.png")} alt="" /></div>
        <BiSearchAlt2 className='text-xl'/>
      </div>

   
      <div className="flex flex-col justify-center items-center py-4">
        <BiHome className="text-xl bg-[#0000FF] text-white rounded-md p-1" />
        <BiBookReader className="mt-4 text-xl" />
        <BiUser className="mt-4 text-xl" />
      </div>

      
      <div className="flex  flex-col justify-center ">
        <BiLogOut className="text-xl my-2" />
        <BiBell className=" text-xl" />
      </div>
    </div>
  );
};

export default SideNavbar;
