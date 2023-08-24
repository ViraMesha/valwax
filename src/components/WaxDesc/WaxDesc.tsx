import Image from 'next/image';

import bg from '../../../public/images/candles/wax_bg.jpg';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './WaxDesc.module.scss';

const WaxDesc = () => {
  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.body}>
          <Image
            priority
            src={bg}
            alt="Вид зверху на палаючу свічку на чорному фоні, яка стоїть на дерев'яній колодці"
            sizes="100vw"
            className={styles.img}
          />
          <div className={styles.content}>
            <Typography variant="bodyXLHeavy" className={styles.title}>
              Чому соєвий ?
            </Typography>
            <Typography variant="bodyXL" className={styles.text}>
              Соєвий віск – є безпечним. Не токсичний і не випаровує шкідливі
              речовини. Низька температура плавлення дозволяє використовувати
              свічки максимально довго. Це рослинний віск, який виробляється із
              соєвих бобів – природного й відновлювального продукту. Соєвий віск
              має гарну віддачу в твердому й розплавленому стані як ефірних
              олій, так і спеціально розроблених штучних олій.
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WaxDesc;
