import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-xxl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-4xl font-bold text-gray-800 sm:text-3xl dark:text-slate-100">
                  Find and Book <span className='text-primary dark:text-sky-400'>Appointment</span> with your fav <span className='text-primary dark:text-sky-400'>Doctors</span>
                </h2>

                <p className="mt-4 text-gray-800 text-xl font-semibold dark:text-slate-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                  architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                  sequi architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas.
                </p>

                <div className="md:flex hidden py-4">
                  <Link href="/explore">
                    <button className='bg-primary text-white px-4 py-3 rounded-sm text-md font-bold whitespace-nowrap cursor-pointer dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500'>
                      Explore more
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <Image
                src="/doctors.jpg"
                alt="Doctor's appointment"
                width={1000}
                height={1000}
                className='rounded-4xl'
              />
            </div>

            {/* Mobile view button */}
            <div className="sm:flex md:hidden justify-center mt-4">
              <Button>Explore now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
