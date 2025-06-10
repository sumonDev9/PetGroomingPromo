// import React from 'react';
// import pettrining from '../assets/pettrining.png'
// import veterinary from '../assets/veterinary.png'
// import report from '../assets/report.png'
// import dogreport from '../assets/dogreport.png'
// import shampoorpo from '../assets/shampoorpo.png'
// import idea from '../assets/idea.png'

// const CourseMethodology = () => {
//     return (
//         <div className='py-20'>
//             {/* heading text */}
//             <div className='text-center px-2 md:px-0'>
//                 <h1 className='pet-text text-[#000000] text-3xl md:text-4xl lg:text-5xl'>Curriculum & Training Methods</h1>
//                 <p className='text-[#000000] pet-text text-lg md:text-2xl max-w-[950px] mx-auto mt-5'>Our courses include a mix of theoretical knowledge and hands-on practical training. Key topics covered include:</p>
//             </div>

//             {/* content */}

//             <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 '>
//                 {/* left side contents */}
//                 <div className='mt-5'>
//                     <img src={pettrining} className='w-full h-full' alt="courseModules" />
//                 </div>

//                 {/* right side video */}
//                 <div className='flex flex-col space-y-5 md:mt-10'>
//                     {/* Breed-specific grooming techniques */}
//                     <div className='relative bg-white shadow-md py-5 rounded-lg'>
//                         <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
//                             <img src={veterinary} className='w-12 h-12' alt="coursepet1" />
//                         </div>
//                         <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Breed-specific grooming techniques</p>
//                     </div>
//                     {/* Safe handling and behavior assessment */}
//                     <div className='relative bg-white shadow-md py-5 rounded-lg'>
//                         <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
//                             <img src={report} className='w-12 h-12' alt="coursepet1" />
//                         </div>
//                         <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Safe handling and behavior assessment</p>
//                     </div>
//                     {/* Use of grooming tools and equipment */}
//                     <div className='relative bg-white shadow-md py-5 rounded-lg'>
//                         <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
//                             <img src={dogreport} className='w-12 h-12' alt="coursepet1" />
//                         </div>
//                         <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Use of grooming tools
//                         and equipment</p>
//                     </div>
//                     {/* Hygiene and pet skincare */}
//                     <div className='relative bg-white shadow-md py-10 rounded-lg'>
//                         <div className='absolute top-7 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
//                             <img src={shampoorpo} className='w-12 h-12' alt="shampoorpo" />
//                         </div>
//                         <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Hygiene and pet skincare</p>
//                     </div>
//                     {/* Business insights for starting*/}
//                     <div className='relative bg-white shadow-md py-5 rounded-lg'>
//                         <div className='absolute top-3 -right-3 md:top-10 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
//                             <img src={idea} className='w-12 h-12' alt="shampoorpo" />
//                         </div>
//                         <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Business insights for starting your own pet grooming venture </p>
//                     </div>
                    
               

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseMethodology;

import React, { useEffect } from 'react';
import AOS from 'aos';
import pettrining from '../assets/pettrining.png';
import veterinary from '../assets/veterinary.png';
import report from '../assets/report.png';
import dogreport from '../assets/dogreport.png';
import shampoorpo from '../assets/shampoorpo.png';
import idea from '../assets/idea.png';
import 'aos/dist/aos.css'; 
const CourseMethodology = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 800,
             once: true,   
        });
    }, []);

    return (
        <div className='py-20'>
            {/* heading text */}
            <div className='text-center px-2 md:px-0'>
                <h1 
                    className='pet-text text-[#000000] text-3xl md:text-4xl lg:text-5xl'
                    data-aos="fade-down"
                >
                    Curriculum & Training Methods
                </h1>
                <p 
                    className='text-[#000000] pet-text text-lg md:text-2xl max-w-[950px] mx-auto mt-5'
                    data-aos="fade-down" 
                    data-aos-delay="100"
                >
                    Our courses include a mix of theoretical knowledge and hands-on practical training. Key topics covered include:
                </p>
            </div>

            {/* content */}
            <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {/* left side contents */}
                <div className='mt-5 overflow-hidden' data-aos="zoom-in" data-aos-delay="200">
                    <img src={pettrining} className='w-full h-full' alt="courseModules" />
                </div>

                {/* right side content */}
                <div className='flex flex-col space-y-5 md:mt-10'>
                    {/* Breed-specific grooming techniques */}
                    <div className='relative bg-white shadow-md py-5 rounded-lg' data-aos="fade-up" data-aos-delay="300">
                        <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={veterinary} className='w-12 h-12' alt="veterinary" />
                        </div>
                        <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Breed-specific grooming techniques</p>
                    </div>
                    {/* Safe handling and behavior assessment */}
                    <div className='relative bg-white shadow-md py-5 rounded-lg' data-aos="fade-up" data-aos-delay="400">
                        <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={report} className='w-12 h-12' alt="report" />
                        </div>
                        <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Safe handling and behavior assessment</p>
                    </div>
                    {/* Use of grooming tools and equipment */}
                    <div className='relative bg-white shadow-md py-5 rounded-lg' data-aos="fade-up" data-aos-delay="500">
                        <div className='absolute top-2 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={dogreport} className='w-12 h-12' alt="dogreport" />
                        </div>
                        <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Use of grooming tools
                            and equipment</p>
                    </div>
                    {/* Hygiene and pet skincare */}
                    <div className='relative bg-white shadow-md py-10 rounded-lg' data-aos="fade-up" data-aos-delay="600">
                        <div className='absolute top-7 -right-3 md:top-4 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={shampoorpo} className='w-12 h-12' alt="shampoorpo" />
                        </div>
                        <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Hygiene and pet skincare</p>
                    </div>
                    {/* Business insights for starting*/}
                    <div className='relative bg-white shadow-md py-5 rounded-lg' data-aos="fade-up" data-aos-delay="700">
                        <div className='absolute top-3 -right-3 md:top-10 md:-right-6 bg-[#F8F2F2] border border-[rgb(2, 82, 149)] p-2 flex justify-center items-center w-20 h-20 rounded-full'>
                            <img src={idea} className='w-12 h-12' alt="idea" />
                        </div>
                        <p className='text-start pl-5 max-w-[280px] md:max-w-[500px] pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Business insights for starting your own pet grooming venture </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseMethodology;