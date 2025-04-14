'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  const cardCount = useSelector((state) => state.addToCart.appoinmentCount);

  function toggleButtonHAndle() {
    const html = document.documentElement;
    if (html.classList.contains('dark')) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }

  return (
    <div className="w-full mb-16">
      <div className="fixed top-0 left-0 w-full bg-[#e6f1ff] px-6 py-4 flex items-center justify-between mx-auto shadow-md dark:bg-[#1e2939] z-50">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={80} />
        </Link>

        {/* Menu */}
        <ul className='md:flex gap-8 hidden'>
          {menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className='hover:text-primary text-gray-800 hover:scale-105 transition-all ease-in-out cursor-pointer font-bold dark:hover:text-sky-400 dark:text-slate-100 '>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Buttons */}
        <div className='flex gap-4 items-center'>

          {/* Appointment Button */}
          <Link href="/bookAppointment">
            <button className='bg-primary text-white px-4 py-2 rounded-sm text-md font-bold whitespace-nowrap cursor-pointer dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500'>
              Dr. Call : <span>{cardCount}</span>
            </button>
          </Link>

          {/* Toggle Button */}
          <button
            onClick={toggleButtonHAndle}
            className="w-14 h-7 dark:bg-gray-500 bg-cyan-600 flex items-center rounded-full p-1 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            <div className="w-5 h-5 rounded-full shadow-md bg-white transform transition-transform duration-300 dark:translate-x-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
