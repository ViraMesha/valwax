import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CheckoutPage from '@components/components/CheckoutPage/CheckoutPage';
import { getDictionary } from '@lib/utils/dictionary';

import { Locale } from '../../../../i18n-config';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `Valwax | ${breadcrumbs.checkout}`,
  };
}

export default async function Checkout({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const {
    breadcrumbs,
    page: { checkout, createYourOwn: { configurator }},
    general: {
      messages: { itemDeleted },
    },
  } = await getDictionary(lang);

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.checkout,
            path: `/checkout`,
          },
        ]}
        lang={lang}
      />
      <CheckoutPage dict={checkout} dictParam={configurator} itemDeleted={itemDeleted} />
    </>
  );
}
