import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import CertifiedPerson from '../assets/CertifiedPerson.png'

export default function CertificatePerson() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    course: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.number && formData.email && formData.course) {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', number: '', email: '', course: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0047AB] to-[#73C2FB] py-14 mb-14 relative overflow-hidden">

      {/* Main Container */}
      <div className="relative z-10 w-11/12 mx-auto">
        {/* Header */}
        
          <h1 className="pet-text text-white text-4xl md:text-5xl text-center mb-4 leading-tight">
            Get Certified & Start Your Journey Today!
          </h1>
        

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-[#C7E3F8] border-0 rounded-2xl text-gray-700 placeholder-[#000000] focus:ring-4 focus:ring-blue-200 focus:bg-white transition-all duration-300 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="number"
                      placeholder="Enter Your Number"
                      value={formData.number}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-[#C7E3F8] border-0 rounded-2xl text-gray-700 placeholder-[#000000] focus:ring-4 focus:ring-blue-200 focus:bg-white transition-all duration-300 text-sm font-medium"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-[#C7E3F8] border-0 rounded-2xl text-gray-700 placeholder-[#000000] focus:ring-4 focus:ring-blue-200 focus:bg-white transition-all duration-300 text-sm font-medium"
                    />
                  </div>
                  <div>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-[#C7E3F8] border-0 rounded-2xl text-gray-700 focus:ring-4 focus:ring-blue-200 focus:bg-white transition-all duration-300 text-sm font-medium appearance-none cursor-pointer"
                    >
                      <option value="" className='text-[#000000]'>Preferred Course</option>
                      <option value="web-development">Web Development</option>
                      <option value="data-science">Data Science</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="mobile-app">Mobile App Development</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-[#51A0E3] cursor-pointer text-white font-medium py-2 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    Next Steps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
              <img src={CertifiedPerson} className='w-full h-full' alt="CertifiedPerson" />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 ">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank you!</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your information has been submitted successfully. We will contact you shortly.
              </p>
              
              
              <button
                onClick={closeModal}
                className="w-full bg-[#51A0E3] cursor-pointer hover:to-blue-800 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                close
              </button>
            </div>
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white cursor-pointer transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}