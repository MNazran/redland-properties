import Image from 'next/image';

const AgentInfo: React.FC = () => {
  const agent = {
    name: 'Nama Ejen Hartanah',
    role: 'No. Telefon',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/images/hero.png', // Path to local image
    whatsappLink: '#', // Add your WhatsApp link here
  };

  return (
    <div className='agent-box p-5 bg-white rounded-md shadow-md '>
      <div
        className='img mb-4 rounded-full bg-cover bg-top bg-gray-300'
        style={{
          backgroundImage: `url(${agent.image})`,
          width: '80px', // Set width to match your design
          height: '80px', // Set height to match your design
        }}
        aria-label={agent.name}
      />
      <div className='text'>
        <h3 className='mb-0 text-xl font-bold'>{agent.name}</h3>
        <div className='meta mb-3 text-gray-500'>{agent.role}</div>
        <p className='text-gray-700'>{agent.bio}</p>

        {/* Static WhatsApp Icon */}
        <div className='mt-4'>
          <a
            href={agent.whatsappLink}
            className='text-gray-500 hover:text-gray-900'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src='/images/whatsapp.png'
              alt='WhatsApp'
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentInfo;
