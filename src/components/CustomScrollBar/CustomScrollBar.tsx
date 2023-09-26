import { useEffect } from 'react';
import { OverlayScrollbars } from 'overlayscrollbars';

import 'overlayscrollbars/overlayscrollbars.css';

interface UseScrollbarProps {
  root: React.RefObject<HTMLElement>;
  children?: React.ReactNode;
  minHeight?: string;
}

const CustomScrollBar = ({
  root,
  children,
  minHeight = '385px',
}: UseScrollbarProps) => {
  useEffect(() => {
    let scrollbars: OverlayScrollbars | undefined;

    if (root.current) {
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
        scrollbarHorizontal.style.height = '30px';
        scrollbarHorizontal.style.maxHeight = '30px';
      }

      if (scrollbarVertical) {
        scrollbarVertical.style.background = 'var(--cl-primary-600)';
        scrollbarVertical.style.height = '30px';
        scrollbarVertical.style.maxHeight = '30px';
      }

      if (scrollWraperVertical) {
        scrollWraperVertical.style.border = '1px solid var(--cl-primary-600)';
        scrollWraperVertical.style.borderRadius = '4px';
        scrollWraperVertical.style.width = '12px';
        scrollWraperVertical.style.height = '100%';
        scrollWraperVertical.style.padding = '0';
      }

      if (scrollWraperHorizontal) {
        scrollWraperHorizontal.style.border = '1px solid var(--cl-primary-600)';
        scrollWraperHorizontal.style.borderRadius = '4px';
        scrollWraperHorizontal.style.width = '12px';
        scrollWraperHorizontal.style.height = '100%';
      }
    }

    return () => {
      if (scrollbars) {
        scrollbars.destroy();
      }
    };
  }, [root]);

  return (
    <div
      ref={root as React.MutableRefObject<HTMLDivElement>}
      style={{
        width: '100%',
        height: '100%',
        minHeight: minHeight,
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomScrollBar;
