'use client';
import { avenir } from '@components/app/fonts';
import Button from '@components/components/Button/Button';
import Container from '@components/components/Container/Container';
import InstructionModal from '@components/components/InstructionModal/InstructionModal';
import Modal from '@components/components/Modal/Modal';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';
import useModal from '@components/hooks/useModal';

import styles from './WelcomeSection.module.scss';

interface WelcomeSectionI {
  dict: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    instruction: {
      text1: string[];
      text2: string[];
      text3: string;
    }
  };
}

const WelcomeSection: React.FC<WelcomeSectionI> = ({ dict }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();
 
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
        <Button
          variant="secondary"
          className={styles.welcome_button}
          onClick={toggleModal}
        >
          {dict.text3}
        </Button>

        {isModal && (
          <Modal onBackdropClick={onBackdropClick}>
            <InstructionModal dict={dict.instruction}></InstructionModal>
          </Modal>
        )}
      </Container>
    </Section>
  );
};

export default WelcomeSection;
