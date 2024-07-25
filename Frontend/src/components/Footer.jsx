import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Footer({ darkMode }) {
  return (
    <footer className={`w-full lg:py-8 px-6 py-4 text-gray-800 dark:text-white `}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 ${darkMode ? 'border-proIndigo' : 'border-proGreen'} rounded-lg ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="flex flex-wrap justify-around text-wrap">
          <div className="w-full md:w-1/3 p-4">
            <h2 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-proIndigo' : 'text-proGreen'} flex justify-center`}>About us</h2>
            <p className="mt-4 text-sm md:text-lg text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim magnam, minus quos quibusdam libero voluptas! Sunt velit molestias, accusantium sapiente ex tempore obcaecati, dolorum porro hic veritatis repellendus cumque consequuntur? Optio temporibus autem excepturi cumque a, et non dolorum ad amet totam dolorem, veniam sequi ratione beatae fugit libero enim!
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-proIndigo' : 'text-proGreen'} flex justify-center`}>Quick Links</h2>
            <ul className="mt-4 space-y-2 text-sm md:text-lg flex flex-col items-center">
              {['Home', 'Help', 'Emergency', 'Log out'].map((link, index) => (
                <li key={index} className="hover:translate-x-2 transition-transform">
                  <a href="#" className={`${darkMode ? 'text-white' : 'text-proGray'} hover:text-proGreen dark:hover:text-proIndigo font-semibold`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
            <h2 className={`text-2xl md:text-4xl font-bold ${darkMode ? 'text-proIndigo' : 'text-proGreen'} w-full flex justify-center md:ml-12`}>Contact Info</h2>
            <ul className="font-mono mt-4 space-y-2 text-sm md:text-lg">
              {['+91 55545121451', '+91 55545121451', '+91 55545121451'].map((number, index) => (
                <li key={index} className="flex items-center space-x-2 hover:translate-x-2 transition-transform">
                  <FaPhoneAlt className={`${darkMode ? 'text-proIndigo' : 'text-proGreen'}`} />
                  <span>{number}</span>
                </li>
              ))}
              <li className="flex items-center space-x-2 hover:translate-x-2 transition-transform">
                <FaEnvelope className={`${darkMode ? 'text-proIndigo' : 'text-proGreen'}`} />
                <span>bitdispensary@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-xs md:text-sm font-semibold mb-2">&copy; 2024 BIT Dispensary. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
