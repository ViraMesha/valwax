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

const PaymentAndDeliveryInfo: React.FC<PaymentAndDeliveryInfoProps> = ({
  dict,
}) => {
  return (
    <>
      <Section className={styles.paymentSection}>
        <Container>
          {dict.map((infoItem, index) => (
            <>
              <Typography variant="subheading3" className={styles.paymentTitle}>
                {infoItem.subTitle}
              </Typography>
              {infoItem.texts.map((text, textIndex) => (
                <Typography
                  key={textIndex}
                  variant="bodyXLHeavy"
                  className={
                    index === dict.length - 1 &&
                    index === infoItem.texts.length - 1
                      ? ''
                      : styles.paymentText
                  }
                >
                  {text}
                </Typography>
              ))}
            </>
          ))}
        </Container>
      </Section>
    </>
  );
};

export default PaymentAndDeliveryInfo;
