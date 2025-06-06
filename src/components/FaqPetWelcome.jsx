import React, { useState } from 'react';

// Individual FAQ item component
const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-[#025295] rounded-full flex items-center justify-center mr-4">
            <span className="text-white text-2xl font-semibold">?</span>
          </div>
          <span className="text-lg md:text-3xl font-medium text-[#090000] pet-text cursor-pointer">{question}</span>
        </div>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div
          className={`p-4 mt-2 ml-14 text-[#000000] bg-[#C7E3F8] cursor-pointer border-l-4 border-blue-200 rounded-r-lg ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

// Main FAQ component
const FaqPetWelcome = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item is open by default

  const faqData = [
    {
      question: 'What is the course duration?',
      answer:
        'The course duration varies depending on the program. On average, most courses are designed to be completed within [Insert time, e.g., 4 to 12 weeks], with flexible scheduling options to suit your availability. You will receive a detailed timeline upon enrollment.',
    },
    {
      question: 'Are the certifications valid across India?',
      answer:
        'Yes, our certifications are recognized and valid across all states in India, providing you with a valuable credential for your career.',
    },
    {
      question: 'Do you offer hands-on practical sessions?',
      answer:
        'Absolutely! We believe in learning by doing. All our courses include extensive hands-on practical sessions to ensure you gain real-world skills.',
    },
    {
      question: 'Is there a discount for group enrollments?',
      answer:
        'Yes, we offer special discounts for group enrollments of three or more people. Please contact our admissions team for more details on the available offers.',
    },
  ];

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-11/12 mx-auto p-4 md:p-8">
         <h1 className='pet-text text-center text-[#180101] text-3xl md:text-4xl lg:text-5xl'>FAQs</h1>
        <div className="space-y-2">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPetWelcome;