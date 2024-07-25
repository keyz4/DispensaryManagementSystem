import React from 'react';
import { FiHome } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { CiLogout, CiCalendar, CiSettings } from "react-icons/ci";

function NavBar() {
  return (
    <div className='bg-proGreen dark:bg-proIndigo text-white lg:w-[5rem] lg:h-[30rem] flex lg:flex-col w-screen h-16 lg:rounded-2xl justify-between items-center p-2'>
      <div className='flex lg:flex-col lg:w-full lg:mt-4 justify-around items-center lg:h-[60%] h-full w-[60%]'>
        {[
          { icon: <FiHome />, key: 'home' },
          { icon: <IoPersonOutline />, key: 'person' },
          { icon: <CiSettings />, key: 'settings' },
          { icon: <CiCalendar />, key: 'calendar' }
        ].map(item => (
          <div
            key={item.key}
            className='w-full flex justify-center items-center text-4xl transition-transform transform hover:scale-125 hover:text-yellow-300 hover:rotate-6'
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div>
        <div className='w-full lg:mb-4 h-max flex justify-center items-center text-4xl transition-transform transform hover:scale-125 hover:text-yellow-300 hover:rotate-6'>
          <CiLogout />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
