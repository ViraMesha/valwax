import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import { ConfiguratorSectionI } from '@components/types';

import Configurator from './Configurator/Configurator';


const ConfiguratorSection: React.FC<ConfiguratorSectionI> = ({ dict }) => {
  return (
    <Section>
      <Container>
        <Configurator dict={dict} />
      </Container>
    </Section>
  );
};

export default ConfiguratorSection;
