import React from 'react';
import courseModules from '../assets/courseModules.png'
import coursepet1 from '../assets/coursepet1.png'
import coursepet2 from '../assets/coursepet2.png'
import coursepet3 from '../assets/coursepet3.png'
import coursepet4 from '../assets/coursepet4.png'

const CourseModules = () => {
    return (
       <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mt-10'>
                    {/* heading text */}
                <h1 className='pet-text text-white text-4xl md:text-5xl text-center'>Course Modules</h1>

              <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                  {/* left side contents */}
                <div className='flex flex-col space-y-5 mt-10'>
                    {/* Introduction to Pet Grooming */}
                    <div className='relative bg-white shadow py-5 rounded-lg'>
                        <div className='absolute top-2 -left-3 md:top-4 md:-left-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={coursepet1} className=' w-12 h-12' alt="coursepet1" />
                        </div>
                        <p className='text-end md:text-start mx-auto max-w-[300px] md:max-w-[400px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Introduction to Pet Grooming</p>
                    </div>
                    {/* Dog & Cat Anatomy */}
                    <div className='relative bg-white shadow py-10 rounded-lg'>
                        <div className='absolute top-2 -left-3 md:top-4 md:-left-6 bg-[#F8F2F2] p-2 border border-[rgb(2, 82, 149)]  flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={coursepet2} className=' w-12 h-12' alt="coursepet1" />
                        </div>
                        <p className='text-end md:text-start mx-auto max-w-[300px] md:max-w-[400px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Dog & Cat Anatomy</p>
                    </div>
                    {/* Grooming Tools & Maintenance */}
                    <div className='relative bg-white shadow py-5 rounded-lg'>
                        <div className='absolute top-2 -left-3 md:top-4 md:-left-6 bg-[#F8F2F2] p-2 border border-[rgb(2, 82, 149)]  flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={coursepet3} className=' w-12 h-12' alt="coursepet1" />
                        </div>
                        <p className='text-end md:text-start mx-auto max-w-[300px] md:max-w-[400px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Grooming Tools & Maintenance</p>
                    </div>
                    {/* Bathing, Drying & Styling Techniques */}
                         <div className='relative bg-white shadow py-5 rounded-lg'>
                        <div className='absolute top-2 -left-3 md:top-4 md:-left-6 bg-[#F8F2F2] p-2 border border-[rgb(2, 82, 149)]  flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={coursepet4} className=' w-12 h-12' alt="coursepet1" />
                        </div>
                        <p className='text-end md:text-start mx-auto max-w-[250px] md:max-w-[400px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Bathing, Drying & Styling Techniques</p>
                    </div>

                </div>
                {/* right side video */}
                <div className='mt-5'>
                    <img src={courseModules} className='w-full h-full' alt="courseModules" />     
                </div>
              </div>
        </div>
    );
};

export default CourseModules;