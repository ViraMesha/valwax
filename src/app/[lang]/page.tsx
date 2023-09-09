import Link from 'next/link';
import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
import Instagram from '@components/components/instagram/Instagram';
import Quote from '@components/components/Quote/Quote';
import Subscription from '@components/components/Subscription/Subscription';

import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/dictionary';
import Compass from '../../components/Compass/Compass';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return (
    <>
      <Hero dict={page.home.hero} />
      <AboutUsSection dict={page.home.about} />
      <Quote />
      <Compass />
      <Instagram />
      <Subscription />
    </>
  );
}
