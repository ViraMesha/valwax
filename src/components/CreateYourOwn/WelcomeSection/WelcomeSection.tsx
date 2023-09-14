import { avenir } from '@components/app/fonts';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

import styles from './WelcomeSection.module.scss';

interface WelcomeSectionI {
  dict: {
    title: string;
    text1: string;
    text2: string;
  };
}

const WelcomeSection: React.FC<WelcomeSectionI> = ({ dict }) => {
  return (
    <Section className={styles.welcome_section}>
      <Container>
        <Typography variant="heading2" className={avenir.className}>
          {dict.title}
        </Typography>
        <Typography variant="bodyRegular" className={styles.welcome_text}>
          <span>{dict.text1}</span>
          <span>{dict.text2}</span>
        </Typography>
      </Container>
    </Section>
  );
};

export default WelcomeSection;
