import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandleDetailsSection from '@components/components/CandleDetailsPage/CandleDetailsSection/CandleDetailsSection';
import RelatedProducts from '@components/components/shared/RelatedProducts/RelatedProducts';

import { Locale } from '../../../../../../i18n-config';
import { getCandleDetails } from '../../../../../../lib/api-services/api';
import { getDictionary } from '../../../../../../lib/utils/dictionary';

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
  const { page } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs[slug],
            path: `/${slug}`,
          },
          {
            label: product.title,
            path: `/${slug}/${product.id}`,
          },
        ]}
        lang={lang}
      />
      <CandleDetailsSection images={product.images} />
      <RelatedProducts
        relatedProducts={product.similar}
        title={page.relatedProducts.title}
      />
    </>
  );
}
