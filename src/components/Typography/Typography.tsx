import styles from "./Typography.module.css";

// Defining the HTML tag that the component will support
const variantsMapping = {
  heading1: "h1",
  subheading1: "h2",
  subheading2: "h3",
  subheading3: "h4",
  button: "span",
  bodyXL: "p",
  bodyL: "p",
  bodyRegular: "p",
  bodyS: "p",
  bodyS2: "p",
} as const;

interface Props {
  variant?: keyof typeof variantsMapping;
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// className: own styles
// ...props: the default attribute of the Component
const Typography: React.FC<Props> = ({
  variant,
  color = "var(--cl-primary-900)",
  children,
  className,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component = variant ? variantsMapping[variant] : "p";

  const textClassName = `${
    variant ? styles[`typography--variant-${variant}`] : ""
  } ${className || ""}`;

  return (
    <Component className={textClassName} {...props} style={{ color: color }}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";

export default Typography;
