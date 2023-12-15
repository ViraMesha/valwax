import BoxDetailsPage from '@components/components/BoxDetailsPage/BoxDetailsPage';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';

import { Locale } from '../../../../../i18n-config';
import { getBoxDetails } from '../../../../../lib/api-services/api';
import { getDictionary } from '../../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang, id },
}: {
  params: {
    lang: Locale;
    id: string;
  };
}) {
  const product = await getBoxDetails(id);
  return {
    title: `Valwax | ${product.title}`,
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
  } = await getDictionary(lang);
  const product = await getBoxDetails(id);

  const regex = /(?:Бокс - |Box - )(.*)/;
  const match = product.title.match(regex);
  const subTitle = match ? match[1] : product.title;

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.boxes,
            path: '/boxes',
          },
          {
            label: subTitle,
            path: `/boxes/${product.id}`,
          },
        ]}
        lang={lang}
      />
      <BoxDetailsPage
        product={product}
        dict={relatedProducts}
        buttonsDict={buttons}
        itemAdded={itemAdded}
      />
    </>
  );
};

export default BoxDetails;
