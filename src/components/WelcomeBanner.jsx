// import React from 'react';
// import bgbackground from '../assets/bgbackground.png'
// import check from '../assets/check.png'


// const WelcomeBanner = () => {
//     return (
//         <div className='w-11/12 mx-auto'>
//            {/* heading */}
//             <div className='text-center mt-10 md:mt-20 lg:mt-40 space-y-4'>
//                 <h1 className='pet-text text-[#000000] text-3xl md:text-4xl lg:text-5xl'>WELCOME</h1>
//                 <p className='pet-text max-w-[1000px] mx-auto text-[#000000] text-lg md:text-2xl lg:text-3xl'>Pet grooming industry in India expected to reach $1.9 billion, now is the perfect time to turn your love for pets into a rewarding career.
//                 </p>
//             </div>
//             {/* content */}
//             <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
//                 {/* left side */}
//                 <div>
//                     <img src={bgbackground} className='w-full h-full' alt="wellcome Banner" />
//                 </div>
//                 {/* right side */}
//                 <div className='mt-5 lg:mt-24 space-y-5'>
//                     <h1 className='pet-text text-2xl md:text-[40px] text-[#0E0800]'>Why Choose Enchanting Pets?</h1>
//                     <div className='flex gap-2 border-b border-[#000000] pb-3'>
//                         <img src={check} className='w-10 h-10' alt="check" />
//                         <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
//                             Comprehensive theoretical and practical knowledge.
//                         </h3>
//                     </div>
//                     <div className='flex border-b border-[#000000] pb-3 gap-2'>
//                         <img src={check} className='w-10 h-10' alt="check" />
//                         <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
//                              Hands-on grooming experience under expert supervision.
//                         </h3>
//                     </div>
//                     <div className='flex gap-2'>
//                        <img src={check} className='w-10 h-10' alt="check" />
//                         <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
//                            Opportunity to start your own pet grooming business or upskill.
//                         </h3>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WelcomeBanner;

import React, { useEffect } from 'react';
import AOS from 'aos';
import bgbackground from '../assets/bgbackground.png';
import check from '../assets/check.png';
import 'aos/dist/aos.css'; 
const WelcomeBanner = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,       
    });
  }, []);

  return (
    <div className='w-11/12 mx-auto'>
      
      <div className='text-center mt-10 md:mt-20 lg:mt-40 space-y-4'>
        <h1
          className='pet-text text-[#000000] text-3xl md:text-4xl lg:text-5xl'
          data-aos="fade-down"
        >
          WELCOME
        </h1>
        <p
          className='pet-text max-w-[1000px] mx-auto text-[#000000] text-lg md:text-2xl lg:text-3xl'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Pet grooming industry in India expected to reach $1.9 billion, now is the perfect time to turn your love for pets into a rewarding career.
        </p>
      </div>

    
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 mt-10 overflow-hidden'>
  
        <div data-aos="zoom-in" data-aos-delay="400">
          <img src={bgbackground} className='w-full h-full' alt="Welcome Banner" />
        </div>

        <div className='mt-5 lg:mt-24 space-y-5' data-aos="fade-up" data-aos-delay="600">
          <h1 className='pet-text text-2xl md:text-[40px] text-[#0E0800]'>
            Why Choose Enchanting Pets?
          </h1>
          
          <div className='flex gap-2 border-b border-[#000000] pb-3' data-aos="fade-up" data-aos-delay="700">
            <img src={check} className='w-10 h-10' alt="check" />
            <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
              Comprehensive theoretical and practical knowledge.
            </h3>
          </div>
          
          <div className='flex border-b border-[#000000] pb-3 gap-2' data-aos="fade-up" data-aos-delay="800">
            <img src={check} className='w-10 h-10' alt="check" />
            <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
              Hands-on grooming experience under expert supervision.
            </h3>
          </div>
          
          <div className='flex gap-2' data-aos="fade-up" data-aos-delay="900">
            <img src={check} className='w-10 h-10' alt="check" />
            <h3 className='text-[#000000] text-xl md:text-[27px] font-bold'>
              Opportunity to start your own pet grooming business or upskill.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;