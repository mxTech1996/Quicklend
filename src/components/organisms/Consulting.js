import { dataSite } from '@/data';

export default function ConsultingInfo() {
  return (
    <section className='relative text-white py-20 px-4 overflow-hidden'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <img
          src={dataSite.image_hero2}
          alt='IT Consulting Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-[#0A1B4F]/90 mix-blend-multiply' />
      </div>

      <div className='relative max-w-7xl mx-auto'>
        {/* Header + Button */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold max-w-3xl leading-tight'>
            Empowering Your Business With Expert Wholesale IT Consulting
          </h2>
          <a
            href='#'
            className='mt-6 lg:mt-0 inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-black hover:text-white transition'
          >
            About Us
          </a>
        </div>

        <hr className='border-white/20 mb-10' />

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-3'>
              Hardware Procurement Strategy
            </h3>
            <p className='text-sm text-white/90'>
              We assist wholesale buyers in sourcing the latest computing
              equipment efficiently, negotiating with top-tier suppliers to
              optimize pricing and inventory.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-3'>
              Custom IT Infrastructure Consulting
            </h3>
            <p className='text-sm text-white/90'>
              Our team provides tailored consulting services to help wholesalers
              identify scalable hardware configurations for corporate clients
              and resellers.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-3'>
              Market Trends & Supplier Matching
            </h3>
            <p className='text-sm text-white/90'>
              Stay ahead with access to actionable insights and curated supplier
              networks in the rapidly evolving IT and computing accessories
              marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
