import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';
import CandlesSection from '@components/components/CandlesSection/CandlesSection';

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
      <CandlesSection />
    </>
  );
};

export default Candle;
