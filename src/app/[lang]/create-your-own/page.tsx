import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import ConfiguratorSection from '@components/components/CreateYourOwn/ConfiguratorSection/ConfiguratorSection';
import WelcomeSection from '@components/components/CreateYourOwn/WelcomeSection/WelcomeSection';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { breadcrumbs } = await getDictionary(lang);
  return {
    title: `Valwax | ${breadcrumbs.createYourOwn}`,
  };
}

const CreateYourOwn = async ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const { breadcrumbs } = await getDictionary(lang);
  const { page, general } = await getDictionary(lang);
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
      <ConfiguratorSection
        dict={page.createYourOwn.configurator}
        dictGeneral={general}
      />
    </>
  );
};

export default CreateYourOwn;
