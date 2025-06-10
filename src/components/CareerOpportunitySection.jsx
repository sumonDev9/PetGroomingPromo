// import React from 'react';
// import kukurPet from '../assets/kukurPet.png';
// import Add100 from '../assets/100Add.png';

// const CareerOpportunitySection = () => {
//     return (
//         <div>
//             {/* heading */}
//             <div className='text-center space-y-4 px-4'>
//                 <h1 className='pet-text text-black text-4xl md:text-5xl'>Enrollment Requirements</h1>
//                 <p className='pet-text text-[#000000] text-2xl'>No prior experience is required</p>
//                 <h2 className='pet-text text-black text-4xl md:text-5xl'>Career Opportunities</h2>
//             </div>

//             {/* content */}
//                    <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mt-10'>
//                     {/* heading text */}
               
//               <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 '>
//                   {/* left side contents */}
//                 <div className='flex flex-col  space-y-5 mt-20'>
//                     {/* heading */}
//                      <h1 className='pet-text text-white text-4xl md:text-5xl text-center'>
//                         Where Can You Work?
//                     </h1>

//                     {/* Pet Spas or Luxury Pet Resorts */}
//                     <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full'>
//                         <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Pet Spas or Luxury Pet Resorts</p>
//                     </div>
//                     {/* Dog & Cat Anatomy */}
//                     <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full'>
//                         <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Home Grooming</p>
//                     </div>
//                     {/* Mobile Grooming Vans */}
//                     <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full'>
//                         <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Mobile Grooming Vans</p>
//                     </div>
//                     {/* Boarding and Daycares Center */}
//                          <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full'>
//                             <p className='text-start pet-text px-5 font-semibold text-xl md:text-3xl text-[#000000]'>Boarding and Daycares Center</p>
//                     </div>

//                 </div>
//                 {/* right side video */}
//                 <div className='relative'>
//                     <img src={kukurPet} className='w-full h-full' alt="courseModules" /> 
//                     <img src={Add100} className='absolute -right-10 -bottom-10 w-48 md:w-72' alt="100Add" />    
//                 </div>
//               </div>
//               <p className='text-white/80 text-xl md:text-3xl font-bold w-11/12 mx-auto mt-5 md:mt-0'>Be Independent And  Start Your Own Pet Grooming Business</p>
//         </div>
//         </div>
//     );
// };

// export default CareerOpportunitySection;

import React, { useEffect } from 'react';
import AOS from 'aos';
import kukurPet from '../assets/kukurPet.png';
import Add100 from '../assets/100Add.png';
import 'aos/dist/aos.css'; 
const CareerOpportunitySection = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 800,
             once: true,   
        });
    }, []);

    return (
        <div>
            {/* heading */}
            <div className='text-center space-y-4 px-4'>
                <h1 className='pet-text text-black text-4xl md:text-5xl' data-aos="fade-down">Enrollment Requirements</h1>
                <p className='pet-text text-[#000000] text-2xl' data-aos="fade-down" data-aos-delay="100">No prior experience is required</p>
                <h2 className='pet-text text-black text-4xl md:text-5xl' data-aos="fade-down" data-aos-delay="200">Career Opportunities</h2>
            </div>

            {/* content */}
            <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mt-10'>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {/* left side contents */}
                    <div className='flex flex-col space-y-5 mt-20'>
                        {/* heading */}
                        <h1 className='pet-text text-white text-4xl md:text-5xl text-center' data-aos="fade-up">
                            Where Can You Work?
                        </h1>

                        {/* Pet Spas or Luxury Pet Resorts */}
                        <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full' data-aos="fade-up" data-aos-delay="100">
                            <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Pet Spas or Luxury Pet Resorts</p>
                        </div>
                        {/* Dog & Cat Anatomy */}
                        <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full' data-aos="fade-up" data-aos-delay="200">
                            <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Home Grooming</p>
                        </div>
                        {/* Mobile Grooming Vans */}
                        <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full' data-aos="fade-up" data-aos-delay="300">
                            <p className='text-start px-5 pet-text font-semibold text-xl md:text-3xl text-[#000000]'>Mobile Grooming Vans</p>
                        </div>
                        {/* Boarding and Daycares Center */}
                        <div className='relative bg-[#C7E3F8] shadow py-5 rounded-full' data-aos="fade-up" data-aos-delay="400">
                            <p className='text-start pet-text px-5 font-semibold text-xl md:text-3xl text-[#000000]'>Boarding and Daycares Center</p>
                        </div>
                    </div>
                    {/* right side image */}
                    <div className='relative' data-aos="fade-up" data-aos-delay="300">
                        <img src={kukurPet} className='w-full h-full' alt="courseModules" />
                        <img src={Add100} className='absolute -right-10 -bottom-10 w-48 md:w-72' alt="100Add" />
                    </div>
                </div>
                <p 
                    className='text-white/80 text-xl md:text-3xl font-bold w-11/12 mx-auto mt-5 md:mt-0'
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    Be Independent And  Start Your Own Pet Grooming Business
                </p>
            </div>
        </div>
    );
};

export default CareerOpportunitySection;