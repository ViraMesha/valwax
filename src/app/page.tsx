import Link from 'next/link';
import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
import Instagram from '@components/components/Instagram/Instagram';
import Quote from '@components/components/Quote/Quote';
import Subscription from '@components/components/Subscription/Subscription';

import Compass from '../components/Compass/Compass';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Quote />
      <Instagram />
      <Compass />
      <Subscription />
    </>
  );
}
