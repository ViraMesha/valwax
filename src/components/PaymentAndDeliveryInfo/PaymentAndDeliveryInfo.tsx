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

const ukrainianDeliveryText =
  /(Доставка компанією Нова Пошта по Україні|Доставка компанією Укрпошта по Україні)/g;
const englishDeliveryText =
  /(Delivery by Nova Poshta company within Ukraine|Delivery by Ukrposhta company within Ukraine)/g;

const PaymentAndDeliveryInfo: React.FC<PaymentAndDeliveryInfoProps> = ({
  dict,
}) => {
  const isUkrainian = (text: string) =>
    text.match(ukrainianDeliveryText) !== null;
  const isEnglish = (text: string) => text.match(englishDeliveryText) !== null;

  const splitAndBoldText = (
    text: string,
    isUkrainian: boolean,
    isEnglish: boolean
  ) => {
    const delimiter = isUkrainian
      ? ukrainianDeliveryText
      : isEnglish
      ? englishDeliveryText
      : '';

    if (!delimiter) return <>{text}</>;

    const parts = text.split(delimiter);

    return parts.map((part, partIndex) => (
      <span key={partIndex}>
        {partIndex % 2 === 0 ? part : <strong key={partIndex}>{part}</strong>}
      </span>
    ));
  };

  return (
    <Section className={styles.paymentSection}>
      <Container>
        {dict.map((infoItem, index) => (
          <div key={index}>
            <Typography variant="subheading3" className={styles.paymentTitle}>
              {infoItem.subTitle}
            </Typography>
            {infoItem.texts.map((text, textIndex) => (
              <Typography
                key={textIndex}
                variant="bodyXLHeavy"
                className={
                  index === dict.length - 1 &&
                  textIndex === infoItem.texts.length - 1
                    ? styles.paymentText
                    : styles.paymentTextWithMargin
                }
              >
                {splitAndBoldText(text, isUkrainian(text), isEnglish(text))}
              </Typography>
            ))}
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default PaymentAndDeliveryInfo;
