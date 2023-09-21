import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';
import styles from './useScrollbar.module.scss';

interface UseScrollbarProps {
  root: React.RefObject<HTMLElement>;
  hasScroll: boolean;
}

const useScrollbar = ({ root, hasScroll }: UseScrollbarProps) => {
  useEffect(() => {
    let scrollbars: OverlayScrollbars | undefined;

    if (root.current && hasScroll) {
      scrollbars = OverlayScrollbars(root.current, {});
    }

    const containerElement = root.current;

    if (containerElement) {
      const scrollbarHorizontal = containerElement.querySelector<HTMLElement>(
        '.os-scrollbar-horizontal .os-scrollbar-handle'
      );
      const scrollbarVertical = containerElement.querySelector<HTMLElement>(
        '.os-scrollbar-vertical .os-scrollbar-handle'
      );

      const scrollWraperVertical = containerElement.querySelector<HTMLElement>(
        '.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless'
      );

      const scrollWraperHorizontal =
        containerElement.querySelector<HTMLElement>(
          '.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless.os-scrollbar-rtl'
        );

      if (scrollbarHorizontal) {
        scrollbarHorizontal.style.background = 'var(--cl-primary-600)';
      }

      if (scrollbarVertical) {
        scrollbarVertical.style.background = 'var(--cl-primary-600)';
      }

      if (scrollWraperVertical) {
        scrollWraperVertical.style.border = '1px solid var(--cl-primary-600)';
        scrollWraperVertical.style.borderRadius = '4px';
      }

      if (scrollWraperHorizontal) {
        scrollWraperHorizontal.style.border = '1px solid var(--cl-primary-600)';
        scrollWraperHorizontal.style.borderRadius = '4px';
      }
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root, hasScroll]);
};

export default useScrollbar;
