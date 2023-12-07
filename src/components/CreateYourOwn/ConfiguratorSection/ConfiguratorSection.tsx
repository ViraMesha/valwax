import Image from 'next/image';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { ConfiguratorSectionI } from '@components/types';
import yourCandle from '@images/create-your-own/Candle.jpg'

import Configurator from './Configurator/Configurator';

import styles from './ConfiguratorSection.module.scss';

const ConfiguratorSection: React.FC<ConfiguratorSectionI> = ({ dict,dictGeneral }) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <div className={styles.div}>
          {/* image configurator */}
          <Image src={yourCandle} alt='your candle' className={styles.image}/>
        </div>
        <Configurator dict={dict} dictGeneral={dictGeneral}/>
      </Container>
    </Section>
  );
};

export default ConfiguratorSection;
