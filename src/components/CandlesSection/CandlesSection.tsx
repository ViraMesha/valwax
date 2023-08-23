import Container from '../Container/Container';
import Section from '../Section/Section';

import CandleList from './CandleList/CandleList';
import candleData from './candleData';

import styles from './CandlesSection.module.scss';

const CandlesSection = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <CandleList items={candleData} />
      </Container>
    </Section>
  );
};

export default CandlesSection;
