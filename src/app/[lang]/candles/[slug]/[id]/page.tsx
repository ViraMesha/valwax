import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandleDetailsSection from '@components/components/CandleDetailsPage/CandleDetailsSection/CandleDetailsSection';
import RelatedProducts from '@components/components/shared/RelatedProducts/RelatedProducts';

import { Locale } from '../../../../../../i18n-config';
import { getCandleDetails } from '../../../../../../lib/api-services/api';
import { getDictionary } from '../../../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang, id },
}: {
  params: {
    lang: Locale;
    id: string;
  };
}) {
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
  const { breadcrumbs } = await getDictionary(lang);
  const product = await getCandleDetails(id);
  const { relatedProducts } = await getDictionary(lang);
  const { general } = await getDictionary(lang);

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
      <CandleDetailsSection product={product} buttonsDict={general.buttons} />
      <RelatedProducts
        relatedProducts={product.similar}
        title={relatedProducts.title}
      />
    </>
  );
}
