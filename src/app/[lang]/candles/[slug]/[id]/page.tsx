import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandleDetailsSection from '@components/components/CandleDetailsPage/CandleDetailsSection/CandleDetailsSection';
import RelatedProducts from '@components/components/shared/RelatedProducts/RelatedProducts';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { getCandleDetails } from '@lib/api-services/api';
import { fetchCandle } from '@lib/api-services/fetchCandle';
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
  // TODO: Replace getCandleDetails
  const product = await getCandleDetails(id);
  return {
    title: `Valwax | ${product.title}`,
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
  } = await getDictionary(lang);
  const currentLang = convertToServerLocale(lang);
  // const candle = await fetchCandle({ id, currentLang });
  // console.log(candle);
  const product = await getCandleDetails(id);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs[slug],
            path: `/candles/${slug}`,
          },
          {
            label: product.title,
            path: `/candles/${slug}/${product.id}`,
          },
        ]}
        lang={lang}
      />
      <CandleDetailsSection
        product={product}
        buttonsDict={buttons}
        itemAdded={itemAdded}
      />
      <RelatedProducts relatedProducts={product.similar} title={title} />
    </>
  );
}
