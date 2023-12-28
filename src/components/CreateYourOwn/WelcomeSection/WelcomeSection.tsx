'use client';

import { useState } from 'react';
import { avenir } from '@components/app/fonts';
import Button from '@components/components/Button/Button';
import Container from '@components/components/Container/Container';
import InstructionModal from '@components/components/CreateYourOwn/InstructionModal/InstructionModal';
import Modal from '@components/components/Modal/Modal';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

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
  const [isModal, toggleModal] = useState(false);

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
            type="button"
            variant="secondary"
            className={styles.welcome_button}
            onClick={() => toggleModal(true)}
          >
            {dict.buttonText}
          </Button>
        </div>
        <Modal active={isModal} setActive={toggleModal}>
          <InstructionModal dict={dict.instruction} />
        </Modal>
      </Container>
    </Section>
  );
};

export default WelcomeSection;
