import Image from 'next/image';
import Link from 'next/link';

import { Locale } from '../../../i18n-config';
import candleImg from '../../../public/images/success-order/candles-vectorportal 1.png';
import Container from '../Container/Container';
import Section from '../Section/Section';

import styles from './SuccessOrderPage.module.scss';

interface SuccessOrderPageProps {
  dict: {
    thankYouMessage: string;
    text: string;
    buttonText: string;
    altText: string;
  };
  lang: Locale;
}

const SuccessOrderPage = ({
  dict: { thankYouMessage, text, buttonText, altText },
  lang,
}: SuccessOrderPageProps) => {
  return (
    <Section>
      <Container>
        <h3>{thankYouMessage}</h3>
        <p>{text}</p>
        <Link href={`/${lang}#compass`}>{buttonText}</Link>
        <Image src={candleImg} alt={altText} />
      </Container>
    </Section>
  );
};

export default SuccessOrderPage;
