import React from 'react';
import medal from '../assets/medal.png'
import rightDrawn from '../assets/right-drawn-arrow 3.png'
import kackhi from '../assets/kackhi.png'
import paw200 from '../assets/paw200.png'
import rightdraw2 from '../assets/right-drawn-arrow 2.png'
import GroupBook from '../assets/GroupBook.png'

const CourseOfferings = () => {
    return (
        <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mt-0 min-h-screen'>
            {/* heading */}
           <h1 className='pet-text text-white text-4xl  max-w-[850px] mx-auto text-center'>
            We offer multiple course options based on skill levels. Our course fees vary based on the program selected.
           </h1>

            {/* content */}
            <div className='flex justify-center mt-20'>
                <div className='relative'>
                     <div className=' bg-[#D6F3F9] relative z-30 left-10 py-6 px-8 w-68 rounded-full'>
                        <p className='text-[#000000] pet-text text-xl font-bold'>Advanced <br />Grooming Course</p>
                    </div>
                         <div className='bg-[#696060] absolute z-50 right-0 -top-14 w-20 h-20  flex justify-center items-center border-2 border-white rounded-full'>
                        <p className='text-lg font-bold text-center text-white'>30 <br />Days</p>
                    </div>
                    <div className='absolute py-1 px-3 z-50 top-24 left-32 bg-white rounded-full'>
                        <span className='text-red-500 text-2xl font-bold'>49000</span>
                    </div>
                      <div>
                            <img src={rightdraw2} className='absolute top-20 left-14 w-28' alt="rightDrawn" />
                            <img src={GroupBook} className='absolute bottom-10 right-10 w-20' alt="paw200" />
                        </div>
                </div>
                <div className='w-[300px] relative h-[300px] z-0 bg-white  rounded-full flex flex-col justify-start items-center'>
                    <img src={medal} className='w-16 h-16 mt-3 mb-8' alt="medal" />
                    <p className='pet-text text-2xl text-center text-black font-bold'>Course Duration & Packages </p>
                    <div className='absolute bottom-0 -right-10 bg-[#D6F3F9] py-6 px-8 w-68 rounded-full'>
                        <p className='text-[#000000] pet-text text-xl font-bold'>Advanced <br />Grooming Course</p>
                    </div>
                         <div>
                            <img src={rightDrawn} className='absolute -bottom-14 left-12 rotate-45 w-20' alt="rightDrawn" />
                            <img src={paw200} className='absolute -bottom-14 -left-10 w-20' alt="paw200" />
                        </div>
                 
            
                    <div className='bg-[#696060] absolute -right-10 bottom-20 w-20 h-20 flex justify-center items-center border-2 border-white rounded-full'>
                        <p className='text-xl font-bold text-center text-white'>60 <br />Days</p>
                    </div>
                </div>
                <div className='relative'>
                   <div className=' bg-[#D6F3F9] relative z-0 right-10 py-6 px-8 w-72 rounded-full'>
                        <p className='text-[#000000] pet-text text-xl font-bold'>Professional <br />Certification Course</p>
                    </div>
                    <div>
                        <div className='absolute py-1 px-3 z-50 top-20 right-5 bg-white rounded-full'>
                            <span className='text-red-500 text-2xl font-bold'>1790000</span>
                        </div>
                        <div>
                            <img src={rightDrawn} className='absolute right-0 w-28' alt="rightDrawn" />
                            <img src={kackhi} className='w-20 absolute bottom-10 right-20' alt="kackhi" />
                        </div>
                    </div>
                <div>
                        <div className='absolute py-1 px-3 -bottom-5 -left-10 bg-white rounded-full'>
                            <span className='text-red-500 text-2xl font-bold'>149000</span>
                        </div>
                   
                </div>
                     <div className='bg-[#696060] absolute z-50 right-10 -top-14 w-20 h-20  flex justify-center items-center border-2 border-white rounded-full'>
                        <p className='text-lg font-bold text-center text-white'>60 + 30 <br />Days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseOfferings;