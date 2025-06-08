

import React, { useState, useEffect } from 'react';

// ছবিটি import করুন

// Modal Component
const ThankYouModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // ৩ সেকেন্ড পর মোডাল বন্ধ হবে

      return () => clearTimeout(timer); // component unmount হলে timer clear হবে
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center transform transition-all scale-100 opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">Thank You!</h2>
        <p className="text-gray-600 mt-2">Your submission has been received.</p>
      </div>
    </div>
  );
};

// Main Page Component
function CertificatePerson() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault(); // পেজ রিলোড হওয়া আটকাবে
    // এখানে ফর্মের ডেটা সার্ভারে পাঠানোর কোড লিখতে পারেন
    console.log('Form submitted!');
    setModalOpen(true);
    event.target.reset(); // ফর্ম রিসেট করবে
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
          Get Certified & Start Your Journey Today!
        </h1>

        <main className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side: Form */}
          <div className="w-full md:w-1/2 lg:w-5/12 bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <input
                  type="tel"
                  placeholder="Enter Your Number"
                  className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Preferred Course"
                  className="w-full p-4 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-8 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105"
              >
                Next Steps
              </button>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 lg:w-5/12 mt-8 md:mt-0 flex justify-center">
            <img
              src={''}
              alt="Person with certificate"
              className="rounded-2xl shadow-xl object-cover w-full h-auto max-w-md"
            />
          </div>
        </main>
      </div>

      {/* Thank You Modal */}
      <ThankYouModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

export default CertificatePerson;