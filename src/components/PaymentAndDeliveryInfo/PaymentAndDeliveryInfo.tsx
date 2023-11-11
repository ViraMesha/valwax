import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './PaymentAndDeliveryInfo.module.scss';

interface PaymentAndDeliveryInfoProps {
  dict: {
    subTitle: string;
    texts: string[];
  }[];
}

const PaymentAndDeliveryInfo: React.FC<PaymentAndDeliveryInfoProps> = ({dict}) => {




  return (
    <Section className={styles.paymentSection}>
      <Container>

        
      </Container>
    </Section>
  );
};

export default PaymentAndDeliveryInfo;
