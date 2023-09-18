import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
import Instagram from '@components/components/Instagram/Instagram';
import Quote from '@components/components/Quote/Quote';
import Subscription from '@components/components/Subscription/Subscription';

import { Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/utils/dictionary';
import Compass from '../../components/Compass/Compass';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation } = await getDictionary(lang);
  return {
    title: `Valwax | ${navigation.home}`,
  };
}

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
      <Quote dict={page.home.quote} />
      <Compass dict={page.home.compass} lang={lang} />
      <Instagram />
      <Subscription dict={page.home.subscription} />
    </>
  );
}
