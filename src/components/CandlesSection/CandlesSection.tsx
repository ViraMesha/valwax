import Container from '../Container/Container';
import Filter from '../Filter/Filter';
import Section from '../Section/Section';

import CandleList from './CandleList/CandleList';
import candleData from './candleData';

import styles from './CandlesSection.module.scss';

interface CandlesSectionI {
  dict: {
    filter: any
  };
}

const CandlesSection: React.FC<CandlesSectionI> = ({dict}) => {
  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Filter dict={dict.filter}/>
        <CandleList items={candleData} />
      </Container>
    </Section>
  );
};

export default CandlesSection;
