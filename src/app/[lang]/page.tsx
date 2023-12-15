import AboutUsSection from '@components/components/AboutUsSection/AboutUsSection';
import Hero from '@components/components/Hero/Hero';
import Instagram from '@components/components/Instagram/Instagram';
import Quote from '@components/components/Quote/Quote';
import Subscription from '@components/components/Subscription/Subscription';
import { getDictionary } from '@lib/utils/dictionary';

import { Locale } from '../../../i18n-config';
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
  const {
    page: {
      home: { hero, about, quote, compass, subscription },
      checkout: {
        form: {
          errorMessages: { emailReq, validEmail },
        },
      },
    },
  } = await getDictionary(lang);
  return (
    <>
      <Hero dict={hero} />
      <AboutUsSection dict={about} />
      <Quote dict={quote} />
      <Compass dict={compass} lang={lang} />
      <Instagram />
      <Subscription dict={{ subscription, emailReq, validEmail }} />
    </>
  );
}
