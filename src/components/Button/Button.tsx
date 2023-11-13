import { TbArrowRight } from 'react-icons/tb';

import styles from './Button.module.scss';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  variant: 'primary' | 'secondary' | 'tertiary' | 'dark' | 'light';
  hasIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  variant = 'primary',
  hasIcon,
  className,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    hasIcon ? styles.container : ''
  } ${className || ''} `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      {...rest}
      className={buttonClass}
    >
      <span>{children}</span>
      {hasIcon && <TbArrowRight className={styles.icon} />}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
