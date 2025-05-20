import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { FaArrowRight } from 'react-icons/fa';

const services = dataSite.products;

export default function Products() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='max-w-7xl mx-auto px-4 py-16'>
      <h2 className='text-4xl font-bold mb-12 border-b pb-4'>
        Explore Our Products
      </h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {services.map((service, index) => {
          const isInCart = validateProductInCart(service.id);

          const handleAddToCart = () => {
            handleAddOrRemoveProduct(service.id);
          };

          return (
            <div
              key={index}
              className='relative group h-64 overflow-hidden rounded shadow-md'
            >
              <img
                src={service.image}
                alt={service.name}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className='absolute bottom-6 left-6 bg-white/90 px-6 py-4 rounded-sm'>
                <h3 className='text-lg font-semibold text-[#1e3a8a]'>
                  {service.name}
                </h3>
                <p className='text-sm text-gray-600 mt-2'>
                  {service.description}
                </p>
                {/* price */}
                <p className='text-lg font-bold text-[#1e3a8a] mt-2'>
                  ${service.price}
                </p>
                {/* add to cart button */}
                <button
                  onClick={handleAddToCart}
                  className={`mt-4 flex items-center text-[#1e3a8a] font-semibold hover:underline ${
                    isInCart ? 'text-red-500' : ''
                  }`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  <FaArrowRight className='ml-2' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
