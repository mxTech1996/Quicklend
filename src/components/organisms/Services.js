'use client';
import { dataSite } from '@/data';
import { FiArrowRight } from 'react-icons/fi';

const services = dataSite.services;

export default function ServicesSection() {
  return (
    <section id='services' className='w-full bg-white text-black py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-12 border-b pb-4'>
          Explore Our Services
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
          {/* Left column - list of services */}
          <div className='lg:col-span-2 space-y-12'>
            {services.map((service, i) => (
              <div
                key={i}
                className='flex flex-col sm:flex-row gap-6 items-start'
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className='w-full sm:w-48 h-48 object-cover rounded-md'
                />
                <div>
                  <h3 className='text-xl font-semibold mb-1'>
                    {service.title}
                  </h3>
                  <p className='text-sm text-gray-600 mb-2'>
                    {service.description}
                  </p>
                  <a
                    href='#'
                    className='text-sm font-semibold inline-flex items-center hover:underline'
                  >
                    Read More <FiArrowRight className='ml-1' />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - sticky card */}
          <div className='relative'>
            <div className='sticky top-24 bg-black text-white p-8 rounded shadow-xl'>
              <h3 className='text-2xl font-bold leading-tight mb-4'>
                {dataSite.info[3].title}
              </h3>
              <p className='text-sm text-gray-300 mb-6'>
                {dataSite.info[3].description}
              </p>
              <a
                href='/more-information'
                className='inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition'
              >
                Need Help? Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
