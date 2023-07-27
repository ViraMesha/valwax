import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section className={`${styles.sectionContainer} ${className || ''}`}>
      {children}
    </section>
  );
};

export default Section;
