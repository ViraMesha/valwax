
import Image from 'next/image';
import yourCandle from '@images/create-your-own/Candle.jpg';

import Annotation from './Annotation/Annotation';

import styles from './SchematicCandle.module.scss';

const SchematicCandle: React.FC = () => {

  return (
    <div className={styles.div}>
      {/* image configurator */}
      <div className={styles.wrapper}>
        <Image src={yourCandle} alt="your candle" className={styles.image} />
        <Annotation param='container' top='80%' left='16%'/>
        <Annotation param='wax' top='40%' left='10%'/>
        <Annotation param='aroma' top='10%' left='40%'/>
        <Annotation param='wick' top='12%' left='70%'/>
        <Annotation param='color' top='60%' left='90%'/>
      </div>
    </div>
  );
};

export default SchematicCandle;
