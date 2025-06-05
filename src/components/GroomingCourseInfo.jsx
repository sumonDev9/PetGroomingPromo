import React from 'react';

const GroomingCourseInfo = () => {
    return (
        <div className='bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mt-16'>
              <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                  {/* left side contents */}
                <div className='flex flex-col space-y-5'>
                    <h1 className='pet-text text-white text-4xl md:text-5xl'>About the Course</h1>

                    <div>
                        <button className='text-[#120000] bg-[#D6F3F9] px-5 py-2 text-2xl md:text-4xl font-medium pet-text rounded-full'>Our Mission</button>
                        <p className='pet-text1 text-white text-xl md:text-[27px] mt-3 font-bold'>Empower aspiring pet groomers with industry-leading techniques.</p>
                    </div>

                    <div>
                        <button className='text-[#120000] bg-[#D6F3F9] px-5 py-2 text-2xl md:text-4xl font-medium pet-text rounded-full'>Who We Are</button>
                        <p className='pet-text1 text-white text-xl md:text-[27px] mt-3 font-bold'>Enchanting Pets has trained 500+ successful groomers.</p>
                    </div>

                    <div>
                        <button className='text-[#120000] bg-[#D6F3F9] px-5 py-2 text-2xl md:text-4xl font-medium pet-text rounded-full'>What You Gain</button>
                        <p className='pet-text1 text-white text-xl md:text-[27px] mt-3 font-bold'>Real-world grooming expertise and certification.</p>
                    </div>
                </div>
                {/* right side video */}
                <div>
                    <iframe className='border-2 border-white rounded-br-[50px] md:rounded-br-[100px] w-full h-[300px] md:h-[400px] lg:h-[516px]' width="560" height="515" src="https://www.youtube.com/embed/P0FlrQxSBgo?si=iS4iNb2OSkO6H3Xx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>
        </div>
    );
};

export default GroomingCourseInfo;
