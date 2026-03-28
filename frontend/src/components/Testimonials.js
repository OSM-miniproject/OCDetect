"use client";
import React, { useState } from 'react';
import TestimonialCard from './Testimonialcard';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import '../app/globals.css';
const Testimonials = (props) => {
    const { reviews } = props; 
    const [currentIndex, setCurrentIndex] = useState(0);

    const leftShiftHandler = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const rightShiftHandler = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    return (
        <div className=' bg-white flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl rounded-md'>
            <TestimonialCard review={reviews[currentIndex]} />

            <div className='flex text-3xl mt-10 gap-3 text-[#FF7D3D] font-bold mx-auto'>
                <button 
                    onClick={leftShiftHandler}
                    className='cursor-pointer hover:text-[#E06A34]'>
                    <FiChevronLeft />
                </button>
                <button 
                    onClick={rightShiftHandler}
                    className='cursor-pointer hover:text-[#E06A34]'>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
