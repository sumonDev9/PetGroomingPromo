import React, { useEffect } from 'react';
import GroomingPromo from '../assets/GroomingPromo.png'
import groomingdog from '../assets/groomingdog.png'
import dogPawL1 from '../assets/dogPawL1.png'
import dogPawL2 from '../assets/dogPawL2.png'
import dogPawL3 from '../assets/dogPawL3.png'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
const PetGroomingPromo = () => {
    
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });
  }, []);

    return (
        <div
            className="w-full max-h-[100vh] md:max-h-[100vh] relative bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${GroomingPromo})`, aspectRatio: '16/9' }}
        >
             <img src={dogPawL1} className='absolute top-7 hidden lg:block left-8' alt="dogPawL1"  data-aos="fade-down"
             data-aos-delay="800"/>
             <img src={dogPawL2} className='absolute md:top-10 md:left-24 lg:top-24 hidden md:block lg:left-36' alt="dogPawL2"
              data-aos="fade-down"
              data-aos-delay="800" />
             <img src={dogPawL3} className='absolute md:top-14 lg:top-48 hidden md:block left-8' alt="dogPawL3" 
             data-aos="fade-down"
            data-aos-delay="1200"
            />
            {/* content */}
            <div className='w-11/12 mx-auto pt-10 flex justify-between md:flex-row flex-col gap-5'>
            
               {/* left */}
               <div className='flex justify-center items-start flex-col'>
               
                <h1 className='pet-text text-white text-xl md:text-2xl lg:text-4xl max-w-[450px]' data-aos="fade-right">Transform Your Passion for Pets into a Rewarding Career!</h1>
                <p className='text-lg md:text-xl lg:text-2xl text-white font-bold pet-text1 max-w-[650px]' data-aos="fade-right"
                  data-aos-delay="200">Join Enchanting Pets Grooming Academy and master the art of professional pet grooming with expert guidance and hands-on training.</p>
               </div>
               {/* right */}
               <div data-aos="fade-left" data-aos-delay="400">
                <img src={groomingdog} className='w-full h-full' alt="groomingdog" />
               </div>
            </div>
        </div>
    );
};

export default PetGroomingPromo;