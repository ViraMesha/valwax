import BoxesInfo from '@components/components/BoxesPage/BoxesInfo/BoxesInfo';
import BoxesPageHeader from '@components/components/BoxesPage/BoxesPageHeader/BoxesPageHeader';
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
      <BoxesInfo />
    </>
  );
};

export default Boxes;
