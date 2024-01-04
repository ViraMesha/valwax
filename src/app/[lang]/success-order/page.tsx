import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import SuccessOrderPage from '@components/components/SuccessOrderPage/SuccessOrderPage';
import { getDictionary } from '@lib/utils/dictionary';

import { Locale } from '../../../../i18n-config';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    breadcrumbs,
    metaInfo: {
      successOrder: { description },
    },
  } = await getDictionary(lang);

  return {
    title: `Valwax | ${breadcrumbs.successOrder}`,
    description,
  };
}

export default async function SuccessOrder({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page, breadcrumbs } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.successOrder,
            path: `/success-order`,
          },
        ]}
        lang={lang}
      />
      <SuccessOrderPage dict={page.successOrder} lang={lang} />
    </>
  );
}
