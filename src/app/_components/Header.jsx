'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  const cardCount = useSelector((state) => state.addToCart.appoinmentCount);

  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');
  }

  return (
    <div className="w-full mb-16">
      <div className="fixed top-0 left-0 right-0 bg-[#e6f1ff] px-6 py-4 flex items-center justify-between shadow-md dark:bg-[#1e2939] z-50 box-border">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={80} />
        </Link>

        {/* Desktop Menu */}
        <ul className='md:flex gap-8 hidden'>
          {menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className='hover:text-primary text-gray-800 hover:scale-105 transition-all ease-in-out cursor-pointer font-bold dark:hover:text-sky-400 dark:text-slate-100 '>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className='md:flex gap-4 items-center hidden'>
          <Link href="/bookAppointment">
            <button className='bg-primary text-white px-4 py-2 rounded-sm text-md font-bold whitespace-nowrap cursor-pointer dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500'>
              Dr. Call : <span>{cardCount}</span>
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            className="w-14 h-7 dark:bg-gray-500 bg-cyan-600 flex items-center rounded-full p-1 transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            <div className="w-5 h-5 rounded-full shadow-md bg-white transform transition-transform duration-300 dark:translate-x-7" />
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-gray-800 dark:text-slate-100"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-[#e6f1ff] dark:bg-[#1e2939] z-40 shadow-md px-6 py-4 flex flex-col gap-4 items-center">
          {menu.map((item) => (
            <Link href={item.path} key={item.id} onClick={() => setShowMenu(false)}>
              <p className="font-bold text-lg text-gray-800 dark:text-slate-100 hover:text-primary dark:hover:text-sky-400">
                {item.name}
              </p>
            </Link>
          ))}
          <Link href="/bookAppointment">
            <button className='bg-primary text-white px-4 py-2 rounded-sm text-md font-bold whitespace-nowrap cursor-pointer dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500'>
              Dr. Call : <span>{cardCount}</span>
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            className="w-14 h-7 dark:bg-gray-500 bg-cyan-600 flex items-center rounded-full p-1 transition-colors duration-300"
          >
            <div className="w-5 h-5 rounded-full shadow-md bg-white transform transition-transform duration-300 dark:translate-x-7" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
