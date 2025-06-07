import React from 'react';
import backLaste from '../assets/backLaste.png'
import laste from '../assets/laste.png'
import pawwlecome from '../assets/pawwlecome.png'

const EarningOpportunityBanner = () => {
    return (
        <div
         className="w-full min-h-screen relative bg-cover bg-center bg-no-repeat pb-5"
        style={{ backgroundImage: `url(${backLaste})`, }}
        >
            <div className='w-11/12 mx-auto'>
               {/* heading */}
               <div className='flex justify-center'>
                <button className='bg-[#51A0E3] text-white mb-5 py-2 px-5 rounded-3xl pet-text text-xl md:text-4xl font-bold'>PET GROOMING OPPORTUNITY</button>
               
               </div>
                <h1 className='text-[#000000] font-bold text-xl md:text-4xl lg:text-6xl text-center'>EARN 60,000/ MONTH <br />
                    GROOM PETS AT HOME!</h1>

                    {/* content */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:mt-10'>
                        {/* left conetnt */}
                        <div>
                            <img src={laste} className='h-[400px] w-full object-contain' alt="laste" />
                        </div>
                        {/* right side */}
                        <div className='text-center space-y-3'>
                            <img src={pawwlecome} className='mx-auto' alt="pawwlecome"/>
                            <h1 className='text-[#0F0700] text-3xl font-bold '>JOIN ENCHANTING PETS <br />
                                HOME GROOMING SQUAD
                            </h1>
                            <p className='text-[#000000] font-bold text-4xl'>TURN YOUR SKILLS 
                           <br />  INTO CASH!</p>
                             <button className='py-3 w-40 text-2xl font-semibold bg-white text-[#000000] rounded-xl'>Apply Now</button>
                        </div>
                    </div>
            </div>
           
        </div>
    );
};

export default EarningOpportunityBanner;