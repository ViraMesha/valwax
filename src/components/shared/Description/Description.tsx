import Button from '@components/components/Button/Button';
import CandleQuantity from '@components/components/shared/CandleQuantity/CandleQuantity';
import Typography from '@components/components/Typography/Typography';
import { BoxDetailsI, CandleDetailsI } from '@components/types';

import AccordionSection from '../AccordionSection/AccordionSection';

import styles from './Description.module.scss';

interface DescriptionProps {
  product: BoxDetailsI | CandleDetailsI;
  id?: string;
}

const Description: React.FC<DescriptionProps> = ({ product, id }) => {
  const isCandlePage = id === 'candle_details';
  const isBoxPage = id === 'box_details';

  return (
    <div className={styles.candleSectionWrapper}>
      <div className={styles.candleWrapper}>
        <Typography
          variant="bodyXLHeavy"
          color="var(--cl-primary-800)"
          className={styles.candleTitle}
        >
          Ароматична свічка Paradise
        </Typography>
        {isCandlePage && (
          <Typography
            variant="bodyRegular"
            color="var(--cl-gray-500)"
            className={styles.candleDescription}
          >
            Свічка з соєвого воску з ароматом опалого листя.
          </Typography>
        )}
        <div className={styles.candeleCostWrapper}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Вартість:
          </Typography>
          <div className={styles.candeleCost}>
            <Typography
              variant="subheadingMobile"
              color="var(--cl-primary-500)"
            >
              550
            </Typography>
            <span className={styles.costSymbol}>&#8372;</span>
          </div>
        </div>
        <div className={styles.candeleQuantity}>
          <Typography variant="button" color="var(--cl-gray-500)">
            Кількість:
          </Typography>
          <CandleQuantity />
        </div>
        {isBoxPage && (
          <div>
            <Typography variant="button" color="var(--cl-gray-500)">
              Оберіть аромат
            </Typography>
          </div>
        )}
        <div className={styles.candeleBuyWrapper}>
          <Button variant="secondary" className={styles.candeleBuy}>
            До кошика
          </Button>
          <Button variant="primary" className={styles.candeleBuy}>
            Купити зараз
          </Button>
        </div>

        {/* <div className={styles.candeleAccordion}>
           {product.components.map((component, index) => (
            <AccordionSection
              key={index}
              title={component.title}
              content={component.content}
            />
          ))}
        </div> */}

        {/* Ця частина кода тимчасова, замість цієї що вище закоментована */}
        {isCandlePage && (
          <div className={styles.candeleAccordion}>
            <AccordionSection title="Верхні ноти" content="Кедр, пекан" />
            <AccordionSection title="Базові ноти" content="Кедр, пекан" />
            <AccordionSection title="Об’єм" content="Кедр, пекан" />
          </div>
        )}

        {isBoxPage && (
          <div className={styles.candeleAccordion}>
            <AccordionSection title="Тара на 30 мл" content="Кедр, пекан" />
            <AccordionSection
              title="Гніт"
              content="Гніт - це секрет рівномірного та довгого горіння свічок. 
Ми додаємо його до вашого боксу, щоб ви могли насолоджуватися ідеальним горінням з перших спроб"
            />
            <AccordionSection title="Віск" content="Кедр, пекан" />
            <AccordionSection title="Аромат" content="Кедр, пекан" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
