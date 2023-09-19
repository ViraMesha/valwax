import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import PrivacyPolicyInfo from '@components/components/PrivacyPolicyInfo/PrivacyPolicyInfo';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

const PrivacyPolicy = async ({
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
            label: breadcrumbs.privacyPolicy,
            path: `/privacy-policy`,
          },
        ]}
        lang={lang}
      />
      <PrivacyPolicyInfo dict={page.privacyPolicy.info} />
    </>
  );
};

export default PrivacyPolicy;
