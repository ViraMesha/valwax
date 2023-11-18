import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import Footer from '@components/components/Footer/Footer';
import Header from '@components/components/Header/Header';
import ScrollToTopButton from '@components/components/ScrollToTopButton/ScrollToTopButton';

import { ModalProvider } from '../../../context/ModalContext';
import { StateContext } from '../../../context/StateContext';
import { i18n, Locale } from '../../../i18n-config';
import { getDictionary } from '../../../lib/utils/dictionary';
import { proxima_nova } from '../fonts';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  description:
    'Valwax is an online candle store. Explore our wide range of candle products, including soy candles, coconut candles, and palm candles. Customize your own candles and choose from various payment and delivery options.',
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { footer } = await getDictionary(params.lang);
  const { search } = await getDictionary(params.lang);
  const { navigation } = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={proxima_nova.className}>
      <body>
        <StateContext>
          <ModalProvider>
            <Header lang={params.lang} dict={search} navDict={navigation} />
            <main className={styles.main}>{children}</main>
            <Footer lang={params.lang} dict={footer} navDict={navigation} />
          </ModalProvider>
        </StateContext>
        <ScrollToTopButton />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </body>
    </html>
  );
}
