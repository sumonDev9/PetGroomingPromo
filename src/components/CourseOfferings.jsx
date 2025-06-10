// import React from 'react';
// import medal from '../assets/medal.png'
// import rightDrawn from '../assets/right-drawn-arrow 3.png'
// import kackhi from '../assets/kackhi.png'
// import paw200 from '../assets/paw200.png'
// import rightdraw2 from '../assets/right-drawn-arrow 2.png'
// import GroupBook from '../assets/GroupBook.png'

// const CourseOfferings = () => {
//     return (
//         <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] pt-14 pb-24 mb-10 min-h-screen'>
//             {/* heading */}
//            <h1 className='pet-text text-white text-xl lg:text-4xl  max-w-[850px] mx-auto text-center'>
//             We offer multiple course options based on skill levels. Our course fees vary based on the program selected.
//            </h1>

//             {/* content */}
//             <div className=' justify-center hidden lg:flex mt-20'>
//                 <div className='relative'>
//                      <div className=' bg-[#D6F3F9] relative z-30 left-10 py-6 px-8 w-68 rounded-full'>
//                         <p className='text-[#000000] pet-text text-xl font-bold'>Advanced <br />Grooming Course</p>
//                     </div>
//                          <div className='bg-[#696060] absolute z-50 right-0 -top-14 w-20 h-20  flex justify-center items-center border-2 border-white rounded-full'>
//                         <p className='text-lg font-bold text-center text-white'>30 <br />Days</p>
//                     </div>
//                     <div className='absolute py-1 px-3 z-50 top-24 left-32 bg-white rounded-full'>
//                         <span className='text-red-500 text-2xl font-bold'>49000</span>
//                     </div>
//                       <div>
//                             <img src={rightdraw2} className='absolute top-20 left-14 w-28' alt="rightDrawn" />
//                             <img src={GroupBook} className='absolute bottom-10 right-10 w-20' alt="paw200" />
//                         </div>
//                 </div>
//                 <div className='w-[300px] relative h-[300px] z-0 bg-white  rounded-full flex flex-col justify-start items-center'>
//                     <img src={medal} className='w-16 h-16 mt-3 mb-8' alt="medal" />
//                     <p className='pet-text text-2xl text-center text-black font-bold'>Course Duration & Packages </p>
//                     <div className='absolute bottom-0 -right-10 bg-[#D6F3F9] py-6 px-8 w-68 rounded-full'>
//                         <p className='text-[#000000] pet-text text-xl font-bold'>Advanced <br />Grooming Course</p>
//                     </div>
//                          <div>
//                             <img src={rightDrawn} className='absolute -bottom-14 left-12 rotate-45 w-20' alt="rightDrawn" />
//                             <img src={paw200} className='absolute -bottom-14 -left-10 w-20' alt="paw200" />
//                         </div>
                 
            
//                     <div className='bg-[#696060] absolute -right-10 bottom-20 w-20 h-20 flex justify-center items-center border-2 border-white rounded-full'>
//                         <p className='text-xl font-bold text-center text-white'>60 <br />Days</p>
//                     </div>
//                 </div>
//                 <div className='relative'>
//                    <div className=' bg-[#D6F3F9] relative z-0 right-10 py-6 px-8 w-72 rounded-full'>
//                         <p className='text-[#000000] pet-text text-xl font-bold'>Professional <br />Certification Course</p>
//                     </div>
//                     <div>
//                         <div className='absolute py-1 px-3 z-50 top-20 right-5 bg-white rounded-full'>
//                             <span className='text-red-500 text-2xl font-bold'>1790000</span>
//                         </div>
//                         <div>
//                             <img src={rightDrawn} className='absolute right-0 w-28' alt="rightDrawn" />
//                             <img src={kackhi} className='w-20 absolute bottom-10 right-20' alt="kackhi" />
//                         </div>
//                     </div>
//                 <div>
//                         <div className='absolute py-1 px-3 -bottom-5 -left-10 bg-white rounded-full'>
//                             <span className='text-red-500 text-2xl font-bold'>149000</span>
//                         </div>
                   
//                 </div>
//                      <div className='bg-[#696060] absolute z-50 right-10 -top-14 w-20 h-20  flex justify-center items-center border-2 border-white rounded-full'>
//                         <p className='text-lg font-bold text-center text-white'>60 + 30 <br />Days</p>
//                     </div>
//                 </div>
//             </div>


//             {/* phone deivec */}
//             <div className='lg:hidden flex flex-col mt-3 space-y-4'>
//                 <div className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full mx-auto bg-white flex justify-center items-center flex-col space-y-4'>
//                     <img src={medal} className='mx-auto w-16 h-16 md:w-20 md:h-20' alt="medal" />
//                     <h1 className='text-2xl md:text-3xl font-bold text-black mx-auto text-center'>Course Duration & Packages </h1>
//                 </div>
//                 {/* Basic Grooming Course */}
//                 <div className='relative'>
//                     <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
//                         <h1 className='text-xl md:text-4xl font-semibold'>Basic Grooming Course</h1>
//                     </div>
//                     <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-16 h-16 md:w-24 md:h-24 rounded-full border border-white p-1 flex justify-center items-center'>
//                         <p className='text-center font-medium text-white md:text-xl'>30 <br />Days</p>
//                     </div>
//                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-24 bg-white rounded-full'>
//                         <span className='text-red-500 text-2xl md:text-3xl font-bold'>49000</span>
//                     </div>
//                     <div className='absolute -bottom-18 left-10 md:left-40'>
//                         <img src={GroupBook} className='w-16' alt="paw200" />
//                     </div>
//                 </div>
//                 {/* Professional Certification Course */}
//                 <div className='relative mt-20'>
//                     <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
//                         <h1 className='text-xl md:text-4xl font-semibold'>Professional Certification Course</h1>
//                     </div>
//                     <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-16 h-16 md:w-24 md:h-24 rounded-full border border-white p-1 flex justify-center items-center'>
//                         <p className='text-center font-medium text-white text-sm md:text-xl'>60 + 30 <br />Days</p>
//                     </div>
//                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-26 bg-white rounded-full'>
//                         <span className='text-red-500 text-2xl md:text-3xl font-bold'>179000</span>
//                     </div>
//                       <div className='absolute -bottom-18 left-10  md:left-40'>
//                         <img src={kackhi} className='w-18 ' alt="paw200" />
//                     </div>
//                 </div>
//                 {/* Advanced Grooming Course */}
//                 <div className='relative mt-20'>
//                     <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
//                         <h1 className='text-xl md:text-4xl font-semibold'>Advanced Grooming Course</h1>
//                     </div>
//                     <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-20 h-20 rounded-full border border-white p-1 flex justify-center items-center  md:w-24 md:h-24 '>
//                         <p className='text-center font-medium text-white md:text-xl'>60 <br />Days</p>
//                     </div>
//                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-26 bg-white rounded-full'>
//                         <span className='text-red-500 text-2xl md:text-3xl font-bold'>149000</span>
//                     </div>
//                         <div className='absolute -bottom-18 left-10 md:left-40'>
//                         <img src={paw200} className='w-16' alt="paw200" />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default CourseOfferings;

import React, { useEffect } from 'react';
import AOS from 'aos';
import medal from '../assets/medal.png';
import rightDrawn from '../assets/right-drawn-arrow 3.png';
import kackhi from '../assets/kackhi.png';
import paw200 from '../assets/paw200.png';
import rightdraw2 from '../assets/right-drawn-arrow 2.png';
import GroupBook from '../assets/GroupBook.png';

const CourseOfferings = () => {
    // কম্পোনেন্ট লোড হওয়ার সাথে সাথে AOS চালু হবে
    useEffect(() => {
        AOS.init({
            duration: 800,
           once: true,   
        });
    }, []);

    return (
        <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] pt-14 pb-24 mb-10 min-h-screen'>
            {/* heading */}
            <h1 
                className='pet-text text-white text-xl lg:text-4xl max-w-[850px] mx-auto text-center'
                data-aos="fade-down"
            >
                We offer multiple course options based on skill levels. Our course fees vary based on the program selected.
            </h1>

            {/* Desktop content */}
            <div className='justify-center hidden lg:flex mt-20'>
                <div className='relative' data-aos="zoom-in-up" data-aos-delay="300">
                    <div className='bg-[#D6F3F9] relative z-30 left-10 py-6 px-8 w-68 rounded-full'>
                        <p className='text-[#000000] pet-text text-xl font-bold'>Advanced <br />Grooming Course</p>
                    </div>
                    <div className='bg-[#696060] absolute z-50 right-0 -top-14 w-20 h-20 flex justify-center items-center border-2 border-white rounded-full'>
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
                <div 
                    className='w-[300px] relative h-[300px] z-0 bg-white rounded-full flex flex-col justify-start items-center'
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
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
                <div className='relative' data-aos="zoom-in-up" data-aos-delay="400">
                    <div className=' bg-[#D6F3F9] relative z-0 right-10 py-6 px-8 w-72 rounded-full'>
                        <p className='text-[#000000] pet-text text-xl font-bold'>Professional <br />Certification Course</p>
                    </div>
                    <div>
                        <div className='absolute py-1 px-3 z-50 top-20 right-5 bg-white rounded-full'>
                            <span className='text-red-500 text-2xl font-bold'>179000</span>
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
                    <div className='bg-[#696060] absolute z-50 right-10 -top-14 w-20 h-20 flex justify-center items-center border-2 border-white rounded-full'>
                        <p className='text-lg font-bold text-center text-white'>60 + 30 <br />Days</p>
                    </div>
                </div>
            </div>

            {/* Phone device */}
            <div className='lg:hidden flex flex-col mt-3 space-y-4'>
                <div 
                    className='w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full mx-auto bg-white flex justify-center items-center flex-col space-y-4'
                    data-aos="fade-up"
                >
                    <img src={medal} className='mx-auto w-16 h-16 md:w-20 md:h-20' alt="medal" />
                    <h1 className='text-2xl md:text-3xl font-bold text-black mx-auto text-center'>Course Duration & Packages </h1>
                </div>
                {/* Basic Grooming Course */}
                <div className='relative' data-aos="fade-up" data-aos-delay="100">
                    <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
                        <h1 className='text-xl md:text-4xl font-semibold'>Basic Grooming Course</h1>
                    </div>
                    <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-16 h-16 md:w-24 md:h-24 rounded-full border border-white p-1 flex justify-center items-center'>
                        <p className='text-center font-medium text-white md:text-xl'>30 <br />Days</p>
                    </div>
                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-24 bg-white rounded-full'>
                        <span className='text-red-500 text-2xl md:text-3xl font-bold'>49000</span>
                    </div>
                    <div className='absolute -bottom-18 left-10 md:left-40'>
                        <img src={GroupBook} className='w-16' alt="paw200" />
                    </div>
                </div>
                {/* Professional Certification Course */}
                <div className='relative mt-20' data-aos="fade-up" data-aos-delay="200">
                    <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
                        <h1 className='text-xl md:text-4xl font-semibold'>Professional Certification Course</h1>
                    </div>
                    <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-16 h-16 md:w-24 md:h-24 rounded-full border border-white p-1 flex justify-center items-center'>
                        <p className='text-center font-medium text-white text-sm md:text-xl'>60 + 30 <br />Days</p>
                    </div>
                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-26 bg-white rounded-full'>
                        <span className='text-red-500 text-2xl md:text-3xl font-bold'>179000</span>
                    </div>
                    <div className='absolute -bottom-18 left-10  md:left-40'>
                        <img src={kackhi} className='w-18 ' alt="kackhi" />
                    </div>
                </div>
                {/* Advanced Grooming Course */}
                <div className='relative mt-20' data-aos="fade-up" data-aos-delay="300">
                    <div className='w-68 md:w-[400px] bg-white mx-auto py-4 px-4 rounded-full'>
                        <h1 className='text-xl md:text-4xl font-semibold'>Advanced Grooming Course</h1>
                    </div>
                    <div className='absolute -top-10 right-10 md:right-32 bg-[#696060] text-white w-20 h-20 rounded-full border border-white p-1 flex justify-center items-center  md:w-24 md:h-24 '>
                        <p className='text-center font-medium text-white md:text-xl'>60 <br />Days</p>
                    </div>
                    <div className='absolute py-1 px-3 z-50 top-14 left-36 md:left-80 md:top-26 bg-white rounded-full'>
                        <span className='text-red-500 text-2xl md:text-3xl font-bold'>149000</span>
                    </div>
                    <div className='absolute -bottom-18 left-10 md:left-40'>
                        <img src={paw200} className='w-16' alt="paw200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseOfferings;