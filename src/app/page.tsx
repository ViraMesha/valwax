import Link from 'next/link';
import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
// import Instagram from '@components/components/instagram/Instagram';
import Quote from '@components/components/Quote/Quote';

import Compass from '../components/Compass/Compass';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Quote />
      {/* <nav>
        <Link href="/candle">Candle page</Link>
      </nav>

      <Instagram /> */}
      <Compass />
    </>
  );
}
