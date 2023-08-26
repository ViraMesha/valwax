import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlePage from '@components/components/CandlePage/CandlePage';

const Candle = () => {
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
      <CandlePage />
    </>
  );
};

export default Candle;
