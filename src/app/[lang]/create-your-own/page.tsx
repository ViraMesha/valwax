import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import WelcomeSection from '@components/components/CreateYourOwn/WelcomeSection/WelcomeSection';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

const CreateYourOwn = async ({
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
            label: breadcrumbs.createYourOwn,
            path: `/create-your-own`,
          },
        ]}
        lang={lang}
      />
      <WelcomeSection dict={page.createYourOwn.welcome} />
    </>
  );
};

export default CreateYourOwn;
