import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import candleData from '@components/components/CandleList/candleData';
import CandleList from '@components/components/CandleList/CandleList';

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
      <CandleList items={candleData} />
    </>
  );
};

export default Candle;
