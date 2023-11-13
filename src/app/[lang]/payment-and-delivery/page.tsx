import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import PaymentAndDeliveryInfo from '@components/components/PaymentAndDeliveryInfo/PaymentAndDeliveryInfo';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `Valwax | ${breadcrumbs.paymentAndDelivery}`,
  };
}

const PaymentAndDelivery = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { breadcrumbs } = await getDictionary(lang);
  const { page } = await getDictionary(lang);
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.paymentAndDelivery,
            path: `/payment-and-delivery`,
          },
        ]}
        lang={lang}
      />
      <PaymentAndDeliveryInfo dict={page.paymentAndDelivery.info} />
    </>
  );
};

export default PaymentAndDelivery;
