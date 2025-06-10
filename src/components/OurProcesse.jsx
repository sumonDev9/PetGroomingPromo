// import React from 'react';
// import procsse from '../assets/procsse.png'
// import proceegs1 from '../assets/proceegs1.png'

// const OurProcesse = () => {
//     return (
//         <div className='w-11/12 mx-auto py-14'>
//            {/* heading text */}
//            <h1 className='pet-text text-[#000000] text-3xl md:text-4xl text-center lg:text-5xl'>OUR PROCESS</h1>
//            {/* content */}
//            <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
//             {/* 1st box */}
//                 <div className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat' 
//                  style={{ backgroundImage: `url(${procsse})`}}>
//                     <div className=' '>
//                         <img src={proceegs1} className='absolute top-0 left-0' alt="" />
//                         <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 1</p>
//                     </div>
//                   <h2 className='text-[#190000] text-xl lg:text-[27px] text-center font-bold'>Enroll & Choose <br /> Your Course</h2>
//                 </div>
//             {/* 2st box */}
//                 <div className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat' 
//                  style={{ backgroundImage: `url(${procsse})`}}>
//                     <div className=' '>
//                         <img src={proceegs1} className='absolute top-0 left-0' alt="" />
//                         <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 2</p>
//                     </div>
//                   <h2 className='text-[#190000] text-xl lg:text-[27px]  text-center font-bold'>Learn Techniques <br /> with Experts</h2>
//                 </div>
//             {/* 3st box */}
//                 <div className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat' 
//                  style={{ backgroundImage: `url(${procsse})`}}>
//                     <div className=' '>
//                         <img src={proceegs1} className='absolute top-0 left-0' alt="" />
//                         <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 3</p>
//                     </div>
//                   <h2 className='text-[#190000] text-xl lg:text-[27px]  text-center font-bold'>Gain Hands-On <br />Practical Experience</h2>
//                 </div>
        
//                 {/* 4th box - centered on its row */}
//                 <div className='md:col-span-2 lg:col-span-3 flex justify-center'>
//                     <div className='relative w-full md:w-3/4 lg:w-[400px] h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat'
//                         style={{ backgroundImage: `url(${procsse})` }}>
//                         <div className=' '>
//                             <img src={proceegs1} className='absolute top-0 left-0' alt="" />
//                             <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 4</p>
//                         </div>
//                         <h2 className='text-[#190000] text-xl lg:text-[27px] text-center font-bold'>
//                             Gain Hands-On <br /> Practical Experience
//                         </h2>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurProcesse;

import React, { useEffect } from 'react';
import AOS from 'aos';
import procsse from '../assets/procsse.png';
import proceegs1 from '../assets/proceegs1.png';
import 'aos/dist/aos.css'; 
const OurProcesse = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 800,  
            once: true,   
        });
    }, []);

    return (
        <div className='w-11/12 mx-auto py-14'>
            {/* heading text */}
            <h1 
                className='pet-text text-[#000000] text-3xl md:text-4xl text-center lg:text-5xl'
                data-aos="fade-down"
            >
                OUR PROCESS
            </h1>
            {/* content */}
            <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 overflow-hidden'>
                {/* 1st box */}
                <div 
                    className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${procsse})` }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className=' '>
                        <img src={proceegs1} className='absolute top-0 left-0' alt="" />
                        <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 1</p>
                    </div>
                    <h2 className='text-[#190000] text-xl lg:text-[27px] text-center font-bold'>Enroll & Choose <br /> Your Course</h2>
                </div>

                {/* 2nd box */}
                <div 
                    className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${procsse})` }}
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <div className=' '>
                        <img src={proceegs1} className='absolute top-0 left-0' alt="" />
                        <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 2</p>
                    </div>
                    <h2 className='text-[#190000] text-xl lg:text-[27px]  text-center font-bold'>Learn Techniques <br /> with Experts</h2>
                </div>

                {/* 3rd box */}
                <div 
                    className='relative w-full h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat'
                    style={{ backgroundImage: `url(${procsse})` }}
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <div className=' '>
                        <img src={proceegs1} className='absolute top-0 left-0' alt="" />
                        <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 3</p>
                    </div>
                    <h2 className='text-[#190000] text-xl lg:text-[27px]  text-center font-bold'>Gain Hands-On <br />Practical Experience</h2>
                </div>

                {/* 4th box - centered on its row */}
                <div className='md:col-span-2 lg:col-span-3 flex justify-center' data-aos="fade-up" data-aos-delay="500">
                    <div className='relative w-full md:w-3/4 lg:w-[400px] h-64 rounded-lg flex items-center justify-center bg-cover bg-center bg-no-repeat'
                        style={{ backgroundImage: `url(${procsse})` }}>
                        <div className=' '>
                            <img src={proceegs1} className='absolute top-0 left-0' alt="" />
                            <p className='text-white absolute top-10 left-6 text-2xl uppercase font-bold text-center'>Step <br /> 4</p>
                        </div>
                        <h2 className='text-[#190000] text-xl lg:text-[27px] text-center font-bold'>
                            Gain Hands-On <br /> Practical Experience
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProcesse;