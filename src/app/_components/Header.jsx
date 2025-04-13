import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link';

const Header = () => {
    const menu = [
        {
            id: 1,
            name : "Home",
            path : "/"
        },
        {
            id: 2,
            name : "Explore",
            path : "/explore"
        },
        {
            id: 3,
            name : "Contact Us",
            path : "/contact"
        },
    ]
  return (
 <>
 

<div className='flex items-center justify-between p-3 shadow-sm'>
    <div className='flex items-center gap-8 '>
    <Image src = "/logo.svg" alt = "logo" width={180} height={80}/>
    <ul className='md:flex gap-8 hidden'>
        {
            menu.map((items , idx)=>{
                return(
                  <Link href={items.path} key={items.id}>
                      <li  className='hover:text-primary hover:scale-105 transition-all ease-in-out cursor-pointer font-bold'>
                        {items.name}
                    </li>
                  </Link>
                )
            })
        }
    </ul>
    </div>
    <button className='bg-primary text-white px-4 py-3 rounded-sm text-md font-bold whitespace-nowrap'>Get Started</button>
</div>
 </>
  )
}

export default Header