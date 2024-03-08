import BoxesInfo from '@components/components/BoxesPage/BoxesInfo/BoxesInfo';
import BoxesPageHeader from '@components/components/BoxesPage/BoxesPageHeader/BoxesPageHeader';
import BoxesSection from '@components/components/BoxesPage/BoxesSection/BoxesSection';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import { convertToServerLocale } from '@components/helpers/convertToServerLocale';
import { Locale } from '@i18n';
import { fetchBoxes } from '@lib/api-services/fetchBoxes';
import { getDictionary } from '@lib/utils/dictionary';

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
  const {
    breadcrumbs,
    page: {
      boxes: { header, section, info },
    },
    general: {
      messages: { itemAdded },
    },
  } = await getDictionary(lang);
  const currentLang = convertToServerLocale(lang);
  const promise = fetchBoxes(currentLang);

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
      <BoxesPageHeader dict={header} />
      <BoxesSection dict={section} toastMessage={itemAdded} boxes={promise}         lang={lang}/>
      <BoxesInfo dict={info} />
    </>
  );
};

export default Boxes;
