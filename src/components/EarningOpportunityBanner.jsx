// import React from 'react';
// import backLaste from '../assets/backLaste.png'
// import laste from '../assets/laste.png'
// import pawwlecome from '../assets/pawwlecome.png'

// const EarningOpportunityBanner = () => {
//     return (
//         <div
//          className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat pb-5"
//         style={{ backgroundImage: `url(${backLaste})`, }}
//         >
//             <div className='w-11/12 mx-auto'>
//                {/* heading */}
//                <div className='flex justify-center'>
//                 <button className='bg-[#51A0E3] text-white mb-5 py-2 px-5 rounded-3xl pet-text text-xl md:text-4xl font-bold'>PET GROOMING OPPORTUNITY</button>
               
//                </div>
//                 <h1 className='text-[#000000] font-bold text-xl md:text-4xl lg:text-6xl text-center'>EARN 60,000/ MONTH <br />
//                     GROOM PETS AT HOME!</h1>

//                     {/* content */}
//                     <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:mt-10'>
//                         {/* left conetnt */}
//                         <div>
//                             <img src={laste} className='h-[400px] w-full object-contain' alt="laste" />
//                         </div>
//                         {/* right side */}
//                         <div className='text-center space-y-3'>
//                             <img src={pawwlecome} className='mx-auto' alt="pawwlecome"/>
//                             <h1 className='text-[#0F0700] text-3xl font-bold '>JOIN ENCHANTING PETS <br />
//                                 HOME GROOMING SQUAD
//                             </h1>
//                             <p className='text-[#000000] font-bold text-4xl'>TURN YOUR SKILLS 
//                            <br />  INTO CASH!</p>
//                              <button className='py-3 w-40 text-2xl font-semibold bg-white text-[#000000] rounded-xl'>Apply Now</button>
//                         </div>
//                     </div>
//             </div>
           
//         </div>
//     );
// };

// export default EarningOpportunityBanner;

import React, { useEffect } from 'react';
import AOS from 'aos';
import backLaste from '../assets/backLaste.png';
import laste from '../assets/laste.png';
import pawwlecome from '../assets/pawwlecome.png';

const EarningOpportunityBanner = () => {
    // কম্পোনেন্ট লোড হওয়ার সাথে সাথে AOS চালু হবে
    useEffect(() => {
        AOS.init({
            duration: 1000,
             once: true,   
        });
    }, []);

    return (
        <div
            className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat pb-5"
            style={{ backgroundImage: `url(${backLaste})` }}
        >
            <div className='w-11/12 mx-auto'>
                {/* heading */}
                <div className='flex justify-center' data-aos="fade-down">
                    <button className='bg-[#51A0E3] text-white mb-5 py-2 px-5 rounded-3xl pet-text text-xl md:text-4xl font-bold'>PET GROOMING OPPORTUNITY</button>
                </div>
                <h1 
                    className='text-[#000000] font-bold text-xl md:text-4xl lg:text-6xl text-center'
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    EARN 60,000/ MONTH <br />
                    GROOM PETS AT HOME!
                </h1>

                {/* content */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:mt-10 overflow-hidden'>
                    {/* left content */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <img src={laste} className='h-[400px] w-full object-contain' alt="laste" />
                    </div>
                    {/* right side */}
                    <div className='text-center space-y-3'>
                        <img 
                            src={pawwlecome} 
                            className='mx-auto' 
                            alt="pawwlecome" 
                            data-aos="zoom-in" 
                            data-aos-delay="300"
                        />
                        <h1 
                            className='text-[#0F0700] text-3xl font-bold'
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            JOIN ENCHANTING PETS <br />
                            HOME GROOMING SQUAD
                        </h1>
                        <p 
                            className='text-[#000000] font-bold text-4xl'
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            TURN YOUR SKILLS
                            <br />  INTO CASH!
                        </p>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <button className='py-3 w-40 text-2xl font-semibold bg-white text-[#000000] rounded-xl'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarningOpportunityBanner;