import React from 'react';
import Image from 'next/image';

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md'>
      <Image
        src='/images/whatsapp.png'
        alt='WhatsApp'
        width={100}
        height={100}
        className='mb-4'
      />
      <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
      <p className='text-gray-700 mb-4'>
        Feel free to reach out to us on WhatsApp for any inquiries.
      </p>
      <a
        href='/'
        target='_blank'
        rel='noopener noreferrer'
        className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300'
      >
        Contact on WhatsApp
      </a>
    </div>
  );
};

export default Contact;
