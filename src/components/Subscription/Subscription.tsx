import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Subscription.module.scss';

interface SubscriptionI {
  dict: {
    title: string;
    text: string;
    buttonText: string;
  };
}

const Subscription: React.FC<SubscriptionI> = ({ dict }) => {
  return (
    <Section className={styles.subscription}>
      <Container>
        <Typography
          variant="subheading2"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTitle}
        >
          {dict.title}
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTypography}
        >
          {dict.text}
        </Typography>
        <div className={styles.subscriptionWrapper}>
          <Input placeholder="Email" />
          <Button variant="primary" className={styles.subscriptionButton}>
            {dict.buttonText}
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Subscription;
