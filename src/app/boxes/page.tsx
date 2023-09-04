import BoxesPageHeader from '@components/components/BoxesPage/BoxesPageHeader/BoxesPageHeader';
import BoxesSection from '@components/components/BoxesPage/BoxesSection/BoxesSection';
import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';

const Boxes = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: 'Подарункові бокси',
            path: '/boxes',
          },
        ]}
      />
      <BoxesPageHeader />
      <BoxesSection />
    </>
  );
};

export default Boxes;
