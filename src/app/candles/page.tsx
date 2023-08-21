import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';

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
    </>
  );
};

export default Candle;
