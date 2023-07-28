import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Subscription.module.css';

const Subscription = () => {
  return (
    <Section className={styles.subscription}>
      <Container>
        <Typography
          variant="subheading1"
          color="var(--cl-gray-700)"
          className={styles.subscriptionTypography}
        >
          Підпишись на нашу розсилку
        </Typography>
        <Typography variant="bodyRegular" color="var(--cl-gray-700)">
          Отримуй ексклюзивні пропозиції та будь у курсі всіх наших новинок
        </Typography>
        <div className={styles.subscriptionWrapper}>
          <Input width="400px" height="60px" placeholder="Email" />
          <Button variant="primary">Підписатися</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Subscription;
