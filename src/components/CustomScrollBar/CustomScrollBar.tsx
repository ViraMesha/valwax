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
  // minHeight = '240px',
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

      const scrollWrapperVertical = containerElement.querySelector<HTMLElement>(
        '.os-scrollbar.os-scrollbar-vertical.os-scrollbar-cornerless'
      );

      const scrollWrapperHorizontal =
        containerElement.querySelector<HTMLElement>(
          '.os-scrollbar.os-scrollbar-horizontal.os-scrollbar-cornerless'
        );

      if (scrollbarVertical) {
        scrollbarVertical.style.background = 'var(--cl-primary-600)';
      }

      if (scrollWrapperVertical) {
        scrollWrapperVertical.style.border = '1px solid var(--cl-primary-600)';
        scrollWrapperVertical.style.borderRadius = '4px';
        scrollWrapperVertical.style.width = '12px';
        scrollWrapperVertical.style.height = '100%';
        scrollWrapperVertical.style.padding = '0';
      }

      if (scrollbarHorizontal) {
        scrollbarHorizontal.style.background = 'var(--cl-primary-600)';
      }

      if (scrollWrapperHorizontal) {
        scrollWrapperHorizontal.style.border = '1px solid var(--cl-primary-600)';
        scrollWrapperHorizontal.style.borderRadius = '4px';
        // scrollWrapperHorizontal.style.width = '100%';
        scrollWrapperHorizontal.style.height = '12px';
        scrollWrapperHorizontal.style.padding = '0';
        // scrollWrapperHorizontal.style.position = 'relative';
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
        // minHeight: minHeight,
        overflow: 'hidden',
      }}
    >
      <div>{children}</div>
    </div>
  );
};

export default CustomScrollBar;
