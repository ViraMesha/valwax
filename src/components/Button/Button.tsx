import styles from "./Button.module.css";
import { TbArrowRight } from "react-icons/tb";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  variant: "primary" | "secondary" | "tertiary";
  hasIcon?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({
  disabled,
  children,
  onClick,
  width,
  height,
  variant = "primary",
  hasIcon,
  ...rest
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    hasIcon ? styles.container : ""
  }`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ width: width, height: height }}
      {...rest}
      className={buttonClass}
    >
      <span>{children}</span>
      {hasIcon && <TbArrowRight className={styles.icon} />}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
