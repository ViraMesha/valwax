import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import SuccessOrderPage from '@components/components/SuccessOrderPage/SuccessOrderPage';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  const {
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
  const { page } = await getDictionary(lang);
  const { breadcrumbs } = await getDictionary(lang);

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
