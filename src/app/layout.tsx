import type { Metadata } from 'next';

import { proxima_nova } from './fonts';

import './globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={proxima_nova.className}>
      <body>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
