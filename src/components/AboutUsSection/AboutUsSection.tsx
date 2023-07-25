import Image from "next/image";
import Image1 from "public/images/aboutUs/Image1.jpg";
import Image2 from "public/images/aboutUs/Image2.jpg";
import Image3 from "public/images/aboutUs/Image3.jpg";
import styles from "./AboutUsSection.module.css";

const AboutUsSection = () => {
  return (
    <section>
      <h2 className={styles.title}>Про нас</h2>
      <div>
        <p>
        Ми віримо, що кожна свічка має свою історію, і ми раді поділитися цією
        магією з вами. Наші свічки - це більше, ніж просто предмети. Вони
        створені з любов&apos;ю та ретельною увагою до деталей, щоб запалювати
        ваші серця та дарувати затишок вашим особливим моментам.
      </p>
      <p>
        Створюйте свою особисту симфонію світла з нашими ручної роботи
        виготовленими свічками. Ласкаво запрошуємо до нашого світу магічного
        горіння! Відчуйте дотик мистецтва і неповторну ауру наших свічок.
      </p>
      <p>
        Дозвольте нам створити для вас запальну атмосферу, де кожна мить стає
        особливою та винятковою. Доторкніться чарівності світла з нашими
        унікальними свічками. Випустіть свою внутрішню творчість та створіть
        свій особливий світ, де кожна свічка - це маленький диво.
      </p>
      <Image src={Image1} alt="Candle" width={282} height={285} />
      <Image src={Image2} alt="Candle" width={282} height={285} />
      <Image src={Image3} alt="Candle" width={468} height={621} />
      </div>
      
    </section>
  );
};

export default AboutUsSection;
