import { ReactNode } from 'react';

export type CrumbItem = {
  label: ReactNode; // e.g., soy candles
  path: string; // e.g., /home/soy-candles
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};
