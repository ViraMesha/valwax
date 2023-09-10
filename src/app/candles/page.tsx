import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlePage from '@components/components/CandlePage/CandlePage';
import Tabs from '@components/components/Tabs/Tabs';

const Candles = () => {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: 'Ароматичні соєві свічки',
            path: '/candles',
          },
        ]}
      />
      <Tabs />
      <CandlePage />
    </>
  );
};

export default Candles;
