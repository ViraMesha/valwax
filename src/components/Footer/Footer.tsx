import Image from 'next/image';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';
import { PiPhoneThin } from 'react-icons/pi';
import Logo from 'public/images/logo/Logo.svg';

import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import Typography from '../Typography/Typography';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <Image src={Logo} alt="Logo" width={140} height={114} />
          <Navigation variant='footer'/>
          <div>
            <Typography
              variant="bodyL"
              color="var(--cl-gray-700)"
              className={styles.contactUsText}
            >
              Зв&apos;язатись з нами
            </Typography>
            <address>
              <ul className={styles.addressList}>
                <li className={styles.addressItem}>
                  <a className={styles.addressLink} href="tel:+380970000000">
                    <PiPhoneThin style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      color="var(--cl-gray-700)"
                      className={styles.addressTypography}
                    >
                      + 38 097 000 00 00
                    </Typography>
                  </a>
                </li>
                <li className={styles.addressItem}>
                  <a
                    className={styles.addressLink}
                    href="mailto:valwax@gmail.com"
                  >
                    <CiMail style={{ width: 24, height: 24 }} />
                    <Typography
                      variant="bodyRegular"
                      color="var(--cl-gray-700)"
                      className={styles.addressTypography}
                    >
                      valwax@gmail.com
                    </Typography>
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
        <div className={styles.copyright}>
          <Typography variant="bodyRegular" color="var(--cl-gray-400)">
            Політика конфіденційності.
          </Typography>
          <Typography variant="bodyRegular" color="var(--cl-gray-400)">
            Усі права захищенні.
          </Typography>
          <div className={styles.copyWrapper}>
            <AiOutlineCopyrightCircle
              style={{ width: 16, height: 16, color: 'var(--cl-gray-400)' }}
            ></AiOutlineCopyrightCircle>
            <Typography variant="bodyRegular" color="var(--cl-gray-400)">
              2023 Valwax
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
