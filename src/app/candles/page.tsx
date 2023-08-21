import Breadcrumbs from '@components/components/Breadcrumbs/Breadcrumbs';

const Candle = () => {
  return (
    <>
      <h2>Candles page</h2>
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
