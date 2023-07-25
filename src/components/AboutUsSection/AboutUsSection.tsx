import Image from "next/image";
import Typography from "@components/components/Typography/Typography";
// import { avenir } from "/fonts";
import Image1 from "public/images/aboutUs/Image1.jpg";
import Image2 from "public/images/aboutUs/Image2.jpg";
import Image3 from "public/images/aboutUs/Image3.jpg";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <section>
      <Typography
        variant="subheading1"
        className={styles.title}
        color="var(--cl-primary-800)"
      >
        Про нас
      </Typography>
      <div className={styles.aboutUsContent}>
        <div className={styles.aboutUsWrapper}>
          <div className={styles.aboutUsTextWrapper}>
            <Typography
              variant="bodyRegular"
              // className={avenir.className}
              color="var(--cl-gray-600)"
            >
              Ми віримо, що кожна свічка має свою історію, і ми раді поділитися
              цією магією з вами. Наші свічки - це більше, ніж просто предмети.
              Вони створені з любов&apos;ю та ретельною увагою до деталей, щоб
              запалювати ваші серця та дарувати затишок вашим особливим
              моментам.
            </Typography>
            <Typography
              variant="bodyRegular"
              // className={avenir.className}
              color="var(--cl-gray-600)"
            >
              Створюйте свою особисту симфонію світла з нашими ручної роботи
              виготовленими свічками. Ласкаво запрошуємо до нашого світу
              магічного горіння! Відчуйте дотик мистецтва і неповторну ауру
              наших свічок.
            </Typography>
            <Typography
              variant="bodyRegular"
              // className={avenir.className}
              color="var(--cl-gray-600)"
            >
              Дозвольте нам створити для вас запальну атмосферу, де кожна мить
              стає особливою та винятковою. Доторкніться чарівності світла з
              нашими унікальними свічками. Випустіть свою внутрішню творчість та
              створіть свій особливий світ, де кожна свічка - це маленьке диво.
            </Typography>
          </div>
          <div className={styles.aboutUsImagesWrapper}>
            <Image src={Image1} alt="Candle" width={282} height={285} />
            <Image src={Image2} alt="Candle" width={282} height={285} />
          </div>
        </div>
        <Image
          src={Image3}
          alt="Candle"
          width={486}
          height={621}
          className={styles.aboutUsImage}
          priority
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
