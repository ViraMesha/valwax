import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Subscription.module.scss';
const Subscription = () => {
  return (
    <Section className={styles.subscription}>
      <Container>
        <Typography
          variant="subheading2"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTitle}
        >
          Підпишись на нашу розсилку
        </Typography>
        <Typography
          variant="bodyRegular"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTypography}
        >
          Отримуй ексклюзивні пропозиції та будь у курсі всіх наших новинок
        </Typography>
        <div className={styles.subscriptionWrapper}>
          <Input placeholder="Email" className={styles.subscriptionInput} />
          <Button variant="primary" className={styles.subscriptionButton}>
            Підписатися
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Subscription;
