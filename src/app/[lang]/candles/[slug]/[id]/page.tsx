import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandleDetailsSection from '@components/components/CandleDetailsPage/CandleDetailsSection/CandleDetailsSection';
import RelatedProducts from '@components/components/shared/RelatedProducts/RelatedProducts';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { fetchCandleById } from '@lib/api-services/fetchCandleById';
import { fetchSimilarProducts } from '@lib/api-services/fetchSimilarProducts';
import { getDictionary } from '@lib/utils/dictionary';

import type { Locale } from '../../../../../../i18n-config';

export async function generateMetadata({
  params: { lang, id },
}: {
  params: {
    lang: Locale;
    id: string;
  };
}) {
  const currentLang = convertToServerLocale(lang);
  const candle = await fetchCandleById({ id, currentLang });
  return {
    title: `Valwax | ${candle.name}`,
  };
}

export default async function Candle({
  params: { lang, id, slug },
}: {
  params: {
    lang: Locale;
    id: string;
    slug: 'soy-candles' | 'coconut-candles' | 'palm-candles';
  };
}) {
  const {
    breadcrumbs,
    relatedProducts: { title },
    general: {
      buttons,
      messages: { itemAdded },
    },
    productDescription,
    page: {
      createYourOwn: { configurator },
    },
  } = await getDictionary(lang);

  const currentLang = convertToServerLocale(lang);

  const candle = await fetchCandleById({ id, currentLang });
  const similarProducts = await fetchSimilarProducts({ id, currentLang });

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs[slug],
            path: `/candles/${slug}`,
          },
          {
            label: candle.name,
            path: `/candles/${slug}/${candle.id}`,
          },
        ]}
        lang={lang}
      />
      <CandleDetailsSection
        product={candle}
        buttonsDict={buttons}
        itemAdded={itemAdded}
        productDescriptionDict={productDescription}
        configuratorDict={configurator}
      />
      <RelatedProducts relatedProducts={similarProducts} title={title} />
    </>
  );
}
