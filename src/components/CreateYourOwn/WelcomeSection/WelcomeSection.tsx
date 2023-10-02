'use client';
import { avenir } from '@components/app/fonts';
import Button from '@components/components/Button/Button';
import Container from '@components/components/Container/Container';
import InstructionModal from '@components/components/CreateYourOwn/InstructionModal/InstructionModal';
import Modal from '@components/components/Modal/Modal';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';
import useModal from '@components/hooks/useModal';

import styles from './WelcomeSection.module.scss';

interface WelcomeSectionI {
  dict: {
    title: string;
    text: string[];
    buttonText: string;
    instruction: string[];
  };
}

const WelcomeSection: React.FC<WelcomeSectionI> = ({ dict }) => {
  const { isModal, toggleModal, onBackdropClick } = useModal();

  const handleCloseModal = () => {
    toggleModal();
  };

  return (
    <Section className={styles.welcome_section}>
      <Container>
        <Typography
          variant="heading2"
          className={avenir.className}
          color="var(--cl-gray-600)"
        >
          {dict.title}
        </Typography>
        <Typography
          variant="bodyRegular"
          className={styles.welcome_text}
          color="var(--cl-gray-500)"
        >
          {dict.text.map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </Typography>
        <div className={styles.welcome_buttonWrapper}>
          <Button
            variant="secondary"
            className={styles.welcome_button}
            onClick={toggleModal}
          >
            {dict.buttonText}
          </Button>
        </div>

        {isModal && (
          <Modal onBackdropClick={onBackdropClick}>
            <InstructionModal
              dict={dict.instruction}
              onClose={handleCloseModal}
            />
          </Modal>
        )}
      </Container>
    </Section>
  );
};

export default WelcomeSection;
