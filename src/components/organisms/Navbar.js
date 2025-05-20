'use client';
import { dataSite } from '@/data';
import { FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      <nav className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          <img src={dataSite.iconImage} alt='Logo' className='w-14 h-14' />
          <span className='text-xl font-bold'>Quicklend</span>
        </div>

        {/* Nav Links */}
        <ul className='hidden md:flex space-x-6 text-sm text-slate-600 font-medium'>
          <a href='/#products'>Products</a>
          <a href='/#services'>Services</a>
          <a href='/#faqs'>Faqs</a>
          <a href='/#about'>Know Us</a>
        </ul>

        {/* Call to Action */}
        <div className='ml-4'>
          <button
            onClick={() => (window.location.href = '/my-cart')}
            className='bg-black text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-gray-900 transition'
          >
            Go to Cart
          </button>
        </div>
      </nav>
    </header>
  );
}
