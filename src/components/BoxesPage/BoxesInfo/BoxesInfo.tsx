import Image from 'next/image';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';

import bg from '../../../../public/images/boxes/boxes_info/boxes_info_bg.jpg';

import styles from './BoxesInfo.module.scss';

const BoxesInfo = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.body}>
          <Image
            priority
            src={bg}
            alt="Свічка у скляній тарі"
            sizes="100vw"
            className={styles.img}
          />
          <div className={styles.content}>
            <Typography variant="bodyLBold" className={styles.title}>
              Бокси для твоєї творчості
            </Typography>
            <Typography variant="bodyL24" className={styles.text}>
              Кожен бокс створений для найприємніших емоцій. Поринь у цю
              незвичну атмосферу, стань справжнім свічеваром, створи диво своїми
              руками. Ці магічні коробки прикрасять твій вечір з подругою чи
              другом , чи з коханою людиною, або подарують повну свободу та
              медитанційну тишу для створення свічки сам на сам із собою. В
              кожному боксі Ви отримаєте інструкцію, за допомогою якої у Вас
              точно все вийде.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BoxesInfo;
