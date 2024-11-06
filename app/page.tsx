import Hero from './components/Hero';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <Contact />
    </div>
  );
}
