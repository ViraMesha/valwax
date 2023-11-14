'use client';

import { useEffect } from 'react';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';

import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Section>
      <Container className={styles.container}>
        <h2>Something went wrong!</h2>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </Container>
    </Section>
  );
}
