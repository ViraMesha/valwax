import type { Metadata } from 'next';
import { Slide, ToastContainer } from 'react-toastify';
import Footer from '@components/components/Footer/Footer';
import Header from '@components/components/Header/Header';
import ScrollToTopButton from '@components/components/ScrollToTopButton/ScrollToTopButton';
import { CartContextProvider } from '@context/CartContext';
import { ModalProvider } from '@context/ModalContext';
import { ParamsCandleProvider } from '@context/ParamCandleContext';
import { getDictionary } from '@lib/utils/dictionary';

import { i18n, Locale } from '../../../i18n-config';
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
  const {
    footer,
    search,
    navigation,
    general: {
      messages: { failedRequest },
    },
  } = await getDictionary(params.lang);

  return (
    <html lang={params.lang} className={proxima_nova.className}>
      <body>
        <CartContextProvider>
          <ModalProvider>
            <ParamsCandleProvider>
              <Header
                lang={params.lang}
                dict={search}
                navDict={navigation}
                toastMessage={failedRequest}
              />
              <main className={styles.main}>{children}</main>
              <Footer lang={params.lang} dict={footer} navDict={navigation} />
            </ParamsCandleProvider>
          </ModalProvider>
        </CartContextProvider>
        <ScrollToTopButton />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          transition={Slide}
        />
      </body>
    </html>
  );
}
