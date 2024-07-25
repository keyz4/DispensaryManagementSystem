import React, { useState } from 'react';
import NavBar from './NavBar';
import { CiSearch, CiDark } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdAddCircleOutline } from "react-icons/io";
import Emergency from './Emergency.jsx'
import Footer from './Footer.jsx'

function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`h-max w-screen ${darkMode ? 'dark:bg-slate-950' : 'bg-gradient-to-b from-white to-proGreen'} overflow-x-hidden flex flex-col items-center`}>
      <div className="h-max w-full flex justify-end relative">
        <div className='hidden lg:flex absolute lg:mt-[15rem] lg:left-0 lg:ml-[7rem]'>
          <NavBar />
        </div>
        <div className={`hero h-max lg:w-[90%] w-full ${darkMode ? 'bg-proBlack' : 'bg-proWhite'} border-2 ${darkMode ? 'border-proIndigo' : 'border-proGreen'} lg:rounded-3xl flex flex-col lg:mt-4 items-center`}>
          <div className='search-bar w-full h-20 rounded-3xl flex flex-col lg:flex-row  lg:ml-8 mt-4 lg:mt-2 p-4'>
            <div className='lg:w-1/2 w-full h-full rounded-full flex items-center lg:p-4 lg:justify-start justify-between'>
              <div className='relative w-max flex'>
                <input 
                  type="text" 
                  className={`w-[15rem] lg:w-[25rem] h-10 rounded-l-full border-2 ${darkMode ? 'border-blue-500' : 'border-proGreen'} border-r-0 pl-4 font-mono focus:outline-none`} 
                  placeholder='Search...'
                />
                <button className={`w-12 h-10 rounded-r-full flex justify-center items-center text-3xl border-2 ${darkMode ? 'border-blue-500' : 'border-proGreen'} border-l-0 bg-white font-bold`}>
                  <CiSearch />
                </button>
              </div>
              <button 
                className='lg:ml-4 text-4xl text-proGreen dark:text-blue-500 hover:translate-x-2' 
                onClick={toggleDarkMode}
              >
                <CiDark />
              </button>
            </div>
            <div className='hidden lg:w-1/2 w-full h-full rounded-3xl lg:flex justify-between lg:justify-center items-center mt-4 lg:mt-0'>
              <button className='flex lg:m-4 justify-center items-center text-proGreen dark:text-blue-500 text-sm lg:text-xl font-mono hover:translate-x-2' >
                <div>Appointment History</div>
                <div><MdArrowDropDown /></div>
              </button>
              <button className={`flex lg:m-4 justify-center items-center border-2 border-white dark:border-proGray2 rounded-xl w-max h-max lg:w-[12rem] lg:h-[4rem] text-xl text-white hover:border-proGray dark:hover:border-white ${darkMode ? 'bg-proIndigo' : 'bg-proGreen'}`}>
                <FaPlus className='text-white m-2' />
                <div>Add Patients</div>
              </button>
            </div>
          </div>
          <div className={`main ${darkMode ? 'bg-white' : 'bg-white'} border-2 ${darkMode ? 'border-proIndigo' : 'border-proGreen'} lg:h-60 h-40 w-[95%] lg:w-[70%] mt-8 rounded-2xl flex justify-between`}>
            <div className='flex flex-col ml-4 lg:ml-8 justify-center'>
              <div className={`lg:text-3xl text-lg ${darkMode ? 'text-slate-600' : 'text-proGray'} font-bold`}>Good Morning,</div>
              <div className={`lg:text-5xl text-4xl ${darkMode ? 'text-proIndigo' : 'text-proGreen'} font-medium`}>Dr. Bhai Sher</div>
              <div className={`mt-2 text-xs lg:text-lg font-bold ${darkMode ? 'text-proGray2' : 'text-proGray2'}`}>Have a nice day at work</div>
            </div>
            <div className='lg:h-[18rem] lg:w-[18rem] h-[12rem] w-[12rem] lg:flex'>
              <img src="/MaskGroup.png" alt="" />
            </div>
          </div>
          <div className={`w-full mt-8 mb-4 font-bold text-3xl lg:ml-80 ml-40 ${darkMode ? 'text-white' : 'text-black'}`}>Weekly Reports</div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:w-[80%] lg:h-[20rem] p-4">
            {["Total Patients", "Inventory", "Total Patients", "Patient History"].map((text, index) => (
              <div key={index} className={`h-[90%] w-[14rem] border-2 ${darkMode ? 'border-proIndigo' : 'border-proGreen'} flex flex-col justify-between items-center rounded-xl bg-white transition-transform transform hover:scale-105 hover:shadow-lg`}>
                <div className={`h-20 w-20 mt-8 rounded-xl flex justify-center items-center text-5xl ${darkMode ? 'bg-proIndigo' : 'bg-proGreen'} transition-transform transform hover:rotate-12`}>
                  {index === 0 || index === 2 ? <CgProfile className='text-white' /> : <IoMdAddCircleOutline className='text-white' />}
                </div>
                <div className={`font-bold mt-2 text-xl text-black`}>{text}</div>
                <button className={`w-full rounded-lg h-20 ${darkMode ? 'bg-proIndigo' : 'bg-proGreen'} text-white font-bold text-4xl`}>300</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Emergency darkMode={darkMode} />
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default Hero;
