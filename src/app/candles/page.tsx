import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlePage from '@components/components/CandlePage/CandlePage';
import CandlesSection from '@components/components/CandlesSection/CandlesSection';
import WaxDesc from '@components/components/WaxDesc/WaxDesc';

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
