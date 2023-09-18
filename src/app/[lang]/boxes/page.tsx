import BoxesInfo from '@components/components/BoxesPage/BoxesInfo/BoxesInfo';
import BoxesPageHeader from '@components/components/BoxesPage/BoxesPageHeader/BoxesPageHeader';
import BoxesSection from '@components/components/BoxesPage/BoxesSection/BoxesSection';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';

import { Locale } from '../../../../i18n-config';
import { getDictionary } from '../../../../lib/utils/dictionary';

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { navigation } = await getDictionary(lang);
  return {
    title: `Valwax | ${navigation.boxes}`,
  };
}

const Boxes = async ({ params: { lang } }: { params: { lang: Locale } }) => {
  const { breadcrumbs } = await getDictionary(lang);
  const { page } = await getDictionary(lang);
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: breadcrumbs.boxes,
            path: '/boxes',
          },
        ]}
        lang={lang}
      />
      <BoxesPageHeader dict={page.boxes.header} />
      <BoxesSection />
      <BoxesInfo dict={page.boxes.info} />
    </>
  );
};

export default Boxes;
