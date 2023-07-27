import Link from 'next/link';
import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Instagram from '@components/components/instagram/Instagram';
import Navigation from '@components/components/Navigation/Navigation';
import Quote from '@components/components/Quote/Quote';

import Compass from '../components/Compass/Compass';

export default function Home() {
  return (
    <>
      <AboutUsSection />
      <Quote />
      {/* <nav>
        <Link href="/candle">Candle page</Link>
      </nav>

      <Instagram /> */}
      <Compass />

      <Navigation />
    </>
  );
}
