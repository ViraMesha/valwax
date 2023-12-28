import BoxDetailsPage from '@components/components/BoxDetailsPage/BoxDetailsPage';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import RelatedProducts from '@components/components/shared/RelatedProducts/RelatedProducts';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { fetchBoxById } from '@lib/api-services/fetchBoxById';
import { fetchSimilarProducts } from '@lib/api-services/fetchSimilarProducts';
import { getDictionary } from '@lib/utils/dictionary';

import { Locale } from '../../../../../i18n-config';

export async function generateMetadata({
  params: { lang, id },
}: {
  params: {
    lang: Locale;
    id: string;
  };
}) {
  const currentLang = convertToServerLocale(lang);

  const box = await fetchBoxById({ id, currentLang });

  return {
    title: `Valwax | ${box.title}`,
  };
}

const BoxDetails = async ({
  params: { lang, id },
}: {
  params: { lang: Locale; id: string };
}) => {
  const {
    breadcrumbs,
    relatedProducts,
    general: {
      buttons,
      messages: { itemAdded },
    },
    productDescription,
  } = await getDictionary(lang);

  const currentLang = convertToServerLocale(lang);

  const box = await fetchBoxById({ id, currentLang });
  const similarProducts = await fetchSimilarProducts({ id, currentLang });

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.boxes,
            path: '/boxes',
          },
          {
            label: box.name,
            path: `/boxes/${box.id}`,
          },
        ]}
        lang={lang}
      />
      <BoxDetailsPage
        product={box}
        buttonsDict={buttons}
        itemAdded={itemAdded}
        productDescriptionDict={productDescription}
      />
      <RelatedProducts
        relatedProducts={similarProducts}
        title={relatedProducts.title}
      />
    </>
  );
};

export default BoxDetails;
