import { dataSite } from '@/data';
import { FaCheckSquare } from 'react-icons/fa';

export default function InfoSection() {
  return (
    <section id='about' className='max-w-7xl mx-auto px-4 py-16 text-[#1a1a1a]'>
      {/* Top Grid */}
      <div className='grid md:grid-cols-2 gap-10 items-center mb-16'>
        {/* Left Image */}
        <img
          src={dataSite.services[0].image}
          alt='Wholesale IT Consulting'
          className='rounded-lg w-full h-auto object-cover'
        />

        {/* Right Vision */}
        <div>
          <h2 className='text-4xl font-bold text-[#001067] mb-4'>Our Vision</h2>
          <p className='text-gray-700 mb-6'>
            We envision a wholesale IT consulting platform that empowers
            distributors and corporate clients with reliable procurement
            strategies, efficient technology deployments, and lasting industry
            partnerships.
          </p>
          <ul className='space-y-4'>
            {[
              'Transparent Supplier Engagement & Compliance',
              'Scalable Infrastructure & Growth Strategy',
              'Innovation in Hardware Lifecycle Planning',
              'Commitment to Global Distribution Excellence',
            ].map((item, idx) => (
              <li key={idx} className='flex items-start gap-3'>
                <FaCheckSquare className='text-[#0040FF] mt-1' />
                <span className='text-sm text-gray-800'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className='grid md:grid-cols-2 gap-10'>
        {/* Mission */}
        <div>
          <h2 className='text-4xl font-bold text-[#001067] mb-4'>
            Our Mission
          </h2>
          <p className='text-gray-700 mb-8'>
            Our mission is to empower IT wholesalers with strategic consulting
            services, facilitating reliable sourcing, logistical agility, and
            market-responsive solutions. We help our clients grow through
            tailored technology advice, strong vendor alignment, and continuous
            improvement.
          </p>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-[#0040FF] text-white p-6 rounded shadow'>
              <p className='text-3xl font-bold mb-2'>01</p>
              <p className='font-semibold leading-tight'>
                Optimizing Wholesale Tech Supply Chains
              </p>
            </div>
            <div className='bg-[#0040FF] text-white p-6 rounded shadow'>
              <p className='text-3xl font-bold mb-2'>02</p>
              <p className='font-semibold leading-tight'>
                Enabling Innovation Through Strategic Procurement
              </p>
            </div>
          </div>
        </div>
        <img
          src={dataSite.services[2].image}
          alt='IT warehouse'
          className='rounded-lg w-full h-auto object-cover'
        />
        {/* Bottom Right Images */}
        {/* <div className='grid grid-cols-2 gap-4'>
        
        </div> */}
      </div>
    </section>
  );
}
