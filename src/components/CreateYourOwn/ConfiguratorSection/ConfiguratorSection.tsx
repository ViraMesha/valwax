
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { ConfiguratorSectionI } from '@components/types';

import Configurator from './Configurator/Configurator';
import SchematicCandle from './SchematicCandle/SchematicCandle';

import styles from './ConfiguratorSection.module.scss';

const ConfiguratorSection: React.FC<ConfiguratorSectionI> = ({ dict,dictGeneral }) => {
  return (
    <Section>
      <Container className={styles.wrapper}>
        <SchematicCandle/>
        <Configurator dict={dict} dictGeneral={dictGeneral}/>
      </Container>
    </Section>
  );
};

export default ConfiguratorSection;
