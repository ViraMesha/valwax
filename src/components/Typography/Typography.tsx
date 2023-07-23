import styles from "./Typoghraphy.module.css";

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

type textColor = "black" | "white";

interface Props {
  variant?: keyof typeof variantsMapping;
  color?: textColor;
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
  color = "black",
  children,
  className,
  ...props
}) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component = variant ? variantsMapping[variant] : "p";

  const textClassName = `${
    variant ? styles[`typography--variant-${variant}`] : ""
  } ${color ? styles[`typography--color-${color}`] : ""} ${className || ""}`;

  return (
    <Component className={textClassName} {...props}>
      {children}
    </Component>
  );
};

Typography.displayName = "Typography";

export default Typography;
