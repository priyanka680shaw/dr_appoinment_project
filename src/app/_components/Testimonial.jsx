'use client'
import React from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
    const testimonialCardsData = [
        {
            id: 1,
            name: "Priyanka",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorem. Minima voluptates enim voluptate, exercitationem sit, ad aliquid quaerat neque sunt id dolores est temporibus iste. Totam animi eum rem.",
            img: "/testimonial.jpeg"
        },
        {
            id: 2,
            name: "Priyanka",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorem. Minima voluptates enim voluptate, exercitationem sit, ad aliquid quaerat neque sunt id dolores est temporibus iste. Totam animi eum rem.",
            img: "/testimonial.jpeg"
        },
        {
            id: 3,
            name: "Priyanka",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorem. Minima voluptates enim voluptate, exercitationem sit, ad aliquid quaerat neque sunt id dolores est temporibus iste. Totam animi eum rem.",
            img: "/testimonial.jpeg"
        },
        {
            id: 4,
            name: "Priyanka",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorem. Minima voluptates enim voluptate, exercitationem sit, ad aliquid quaerat neque sunt id dolores est temporibus iste. Totam animi eum rem.",
            img: "/testimonial.jpeg"
        },
        {
            id: 5,
            name: "Victor",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dolorem. Minima voluptates enim voluptate, exercitationem sit, ad aliquid quaerat neque sunt id dolores est temporibus iste. Totam animi eum rem.",
            img: "/testimonial.jpeg"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mt-10 w-full ">
            <div className="container mx-auto w-[90%]">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-xl font-bold  text-primary dark:text-cyan-400">What Our Customers are saying</p>
                    <h1 className="text-3xl font-bold dark:text-slate-100">Testimonial</h1>
                    <p className="text-md text-black dark:text-slate-100" data-aos = "zoom-in">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aperiam suscipit excepturi eius ullam quod soluta rerum est possimus ad eligendi debitis tempora quaerat distinctio quos, facilis optio commodi facere.
                    </p>
                </div>
                {/* Testimonial Cards */}
                <div data-aos = "zoom-in">
                    <Slider {...settings}>
                        {testimonialCardsData.map((data) => (
                            <div className="my-6" key={data.id}>
                                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <div className="">
                                        <img src={data.img} alt="User" className="w-20 h-20 rounded-full dark:shadow-md " />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-3">
                                            <p className="text-md text-gray-600 dark:text-slate-100">{data.text}</p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-cyan-400">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl absolute    top-0 right-0">,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
