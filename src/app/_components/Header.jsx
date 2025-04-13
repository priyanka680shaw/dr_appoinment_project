import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const Header = () => {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Explore", path: "/explore" },
    { id: 3, name: "Contact Us", path: "/contact" },
  ];

  return (
<div className=" w-full bg-white  mb-16">
<div className="fixed top-0 left-0 w-full bg-[#e6f1ff] px-6 py-4 flex items-center justify-between  mx-auto shadow-md ">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={180} height={80} />
        </Link>

        {/* Menu */}
        <ul className='md:flex gap-8 hidden'>
          {menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li className='hover:text-primary text-gray-600 hover:scale-105 transition-all ease-in-out cursor-pointer font-bold'>
                {item.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Button */}
       <Link href = "/bookAppointment">
       <button className='bg-primary text-white px-4 py-2 rounded-sm text-md font-bold whitespace-nowrap cursor-pointer'>
          Dr. Call - <span>0</span>
        </button>

       </Link>
      </div>
    </div>
  );
}

export default Header;
