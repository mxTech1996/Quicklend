// components/WholesaleConsultingFAQs.tsx

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question:
      'What type of consulting services do you offer for wholesale computer equipment?',
    answer:
      'We provide tailored consulting for sourcing, logistics, pricing strategies, supplier negotiations, and bulk procurement of computer hardware and accessories.',
  },
  {
    question: 'Do you assist with importing and compliance requirements?',
    answer:
      'Yes, we help clients navigate customs, certifications, and regulatory compliance for international import of computer equipment and peripherals.',
  },
  {
    question: 'Can you help us find reliable suppliers for bulk purchases?',
    answer:
      'Absolutely. We maintain a vetted network of trusted manufacturers and distributors across the globe, ensuring quality and competitive pricing.',
  },
  {
    question:
      'Do you provide recommendations for inventory management systems?',
    answer:
      'Yes, we evaluate your business needs and suggest scalable inventory solutions that integrate with your sales and logistics workflows.',
  },
  {
    question: 'Can you support us in setting up B2B pricing strategies?',
    answer:
      'We offer strategic consulting to define B2B pricing models that align with your market positioning, volume expectations, and margin targets.',
  },
  {
    question: 'Do you offer ongoing support after initial consulting?',
    answer:
      'Yes, we provide follow-up sessions, reporting dashboards, and continuous improvement recommendations as your business grows.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id='faqs' className='max-w-6xl mx-auto px-4 py-16'>
      <h2 className='text-4xl font-bold text-center mb-12 text-blue-900'>
        Customers Frequently Ask
      </h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className='bg-[#f9f9ff] rounded-md shadow-sm border border-[#e0e7ff]'
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className='flex justify-between items-center w-full px-6 py-4 text-left'
              >
                <span
                  className={`font-semibold text-[#1e3a8a] ${
                    isOpen ? 'text-blue-600' : ''
                  }`}
                >
                  {faq.question}
                </span>
                <span className='text-blue-700'>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='px-6 pb-4 text-sm text-gray-700'
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
