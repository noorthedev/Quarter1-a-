import Image from 'next/image';
import React from 'react';

const FloatingImageContentBlock = () => {
  return (
    <section className='container mx-auto py-10 flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 md:pr-10'>
        <h2 className='text-3xl font-bold text-white'>Shopping Items</h2>
        <p className='text-white mb-4'>
          All orders would take a minimum of 3 to 6 months for delivery. Custom orders can take longer than this. No return policy.
        </p>
        <button className='bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200'>
          Order Now
        </button>

        <h3 className='text-2xl font-semibold mt-6 mb-2 text-center text-white'>
          Coming Soon: Our New Shopping Mall
        </h3>

        <ul>
          <li>
            <strong>Product Details:</strong> Dressed in a captivating magenta lehenga choli, the crew neck choli is a sight to
            behold, heavily embellished with exquisite cut beads, sparkling Swarovski stones, and intricate dabka work. The
            lehenga complements the choli with its mesmerizing cutwork, adding a touch of finesse to the ensemble. &apos;Noura&apos;
            is a celebration of sophistication and style, perfect for the Mehndi festivities where you&apos;ll shine bright.
          </li>
          <br />
          <li>
            <strong>Convenience Product:</strong> A relatively inexpensive item that merits little shopping effort.
          </li>
          <br />
          <li>
            <strong>Shopping Product:</strong> A product that requires comparison shopping, because it is usually more expensive
            and found in fewer stores.
          </li>
          <br />
          <li>
            <strong>Specialty Product:</strong> A particular item that consumers search extensively for and are reluctant to
            accept substitutes.
          </li>
        </ul>
      </div>
      <div className='md:w-1/2 mt-6 md:mt-0'>
        <Image
          src='https://media.istockphoto.com/id/1210759238/vector/shopping-online-on-website-or-mobile-application.jpg?s=1024x1024&w=is&k=20&c=Ol6AGUELjDSa99WETvy8kc0F03CKkoR7O9JWWtVRHRg='
          alt='products'
          width={1024}
          height={1024}
          className='rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
