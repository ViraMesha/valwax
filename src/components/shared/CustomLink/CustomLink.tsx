import Link, { LinkProps } from 'next/link';

import styles from './CustomLink.module.scss';

interface CustomLinkProps extends LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const CustomLink = ({
  href,
  className,
  children,
  ...rest
}: CustomLinkProps) => {
  return (
    <Link href={href} className={`${styles.link} ${className || ''}`} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
