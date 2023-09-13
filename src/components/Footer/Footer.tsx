import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { PiPhoneThin } from 'react-icons/pi';
import Logo from 'public/images/logo/Logo.svg';

import { Locale } from '../../../i18n-config';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Typography from '../Typography/Typography';

import styles from './Footer.module.scss';

interface FooterI {
  lang: Locale;
  dict: {
    contact: string;
    privacyPolicy: string;
    copyright: string;
  };
}

const PHONE_NUMBER = '+38 095 888 46 14';
const EMAIL_ADDRESS = 'valwaxua@gmail.com';

const Footer: React.FC<FooterI> = ({ lang, dict }) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Image src={Logo} alt="Logo" width={140} height={114} />
          <Navigation
            variant="footer"
            className={styles.footerNavigation}
            lang={lang}
          />
          <div>
            <Typography
              variant="bodyL"
              color="var(--cl-gray-700)"
              className={styles.contactUsText}
            >
              {dict.contact}
            </Typography>
            <address>
              <ul className={styles.addressList}>
                <li className={styles.addressItem}>
                  <a className={styles.addressLink} href={`tel:${PHONE_NUMBER}`}>
                    <PiPhoneThin style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      color="var(--cl-gray-700)"
                      className={styles.addressTypography}
                    >
                      {PHONE_NUMBER}
                    </Typography>
                  </a>
                </li>
                <li className={styles.addressItem}>
                  <a
                    className={styles.addressLink}
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
                    <CiMail style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      color="var(--cl-gray-700)"
                      className={styles.addressTypography}
                    >
                      {EMAIL_ADDRESS}
                    </Typography>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className={styles.copyright}>
          <Link href="/privacy-policy">
            <Typography variant="bodyRegular" className={styles.hoverableText}>
              {dict.privacyPolicy}
            </Typography>
            <div className={styles.copyWrapper}>
              <Typography
                variant="bodyRegular"
                className={styles.hoverableText}
              >
                {dict.copyright}
              </Typography>
              <div className={styles.copyrightValwax}>
                <AiOutlineCopyrightCircle
                  className={styles.copyrightIcon}
                  style={{ width: 16, height: 16 }}
                ></AiOutlineCopyrightCircle>
                <Typography
                  variant="bodyRegular"
                  className={styles.hoverableText}
                >
                  2023 Valwax
                </Typography>
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
