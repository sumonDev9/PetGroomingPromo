// import React from 'react';

// const Happygraduates = () => {
//     return (
//         <div className='py-10'>
//             {/* heading */}
//             <div className='text-center px-2 md:px-0'>
//                 <h1 className='pet-text text-[#180101] text-3xl md:text-4xl lg:text-5xl'>Testimonials</h1>
//                 <h1 className='pet-text text-[#180101] text-3xl md:text-4xl lg:text-5xl mt-3'>Hear from Our Happy Graduates</h1>
//             </div>

//             {/* content */}
//             <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
//                 <div className='aspect-video'>
//                     <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                 </div>
//                 <div className='aspect-video'>
//                     <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                 </div>
//                 <div className=' aspect-video'>
//                     <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Happygraduates;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Happygraduates = () => {
    
    useEffect(() => {
        AOS.init({
            duration: 800,
             once: true,   
        });
    }, []);

    return (
        <div className='py-10'>
            {/* heading */}
            <div className='text-center px-2 md:px-0'>
                <h1 
                    className='pet-text text-[#180101] text-3xl md:text-4xl lg:text-5xl'
                    data-aos="fade-down"
                >
                    Testimonials
                </h1>
                <h1 
                    className='pet-text text-[#180101] text-3xl md:text-4xl lg:text-5xl mt-3'
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    Hear from Our Happy Graduates
                </h1>
            </div>

            {/* content */}
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 overflow-hidden'>
                <div className='aspect-video' data-aos="zoom-in" data-aos-delay="200">
                    <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='aspect-video' data-aos="zoom-in" data-aos-delay="300">
                    <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className=' aspect-video' data-aos="zoom-in" data-aos-delay="400">
                    <iframe className='w-full h-full rounded-2xl' src="https://www.youtube.com/embed/ADmn3Gfum-k?si=TrFWdy9Q1meDWmxw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Happygraduates;