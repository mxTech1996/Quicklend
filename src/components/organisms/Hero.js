'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className='relative w-full h-screen bg-black text-white overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src={dataSite.image_hero}
          alt='City Night View'
          className='w-full h-full object-cover '
        />
        <div className='absolute inset-0 bg-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 py-24 lg:py-32 text-center md:text-left'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-12'
        >
          {dataSite.subtitle}
        </motion.h1>

        <div className='mt-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {dataSite.info.slice(0, 4).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <h3 className='text-lg font-semibold border-l-4 pl-3 border-blue-500'>
                {item.title}
              </h3>
              <p className='text-sm text-white/90 mt-2'>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
