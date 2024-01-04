
import Image from 'next/image';
import yourCandle from '@images/create-your-own/Candle2.jpg';

import Annotation from './Annotation/Annotation';

import styles from './SchematicCandle.module.scss';

const SchematicCandle: React.FC = () => {

  return (
    <div className={styles.div}>
      {/* image configurator */}
      <div className={styles.wrapper}>
        <Image src={yourCandle} alt="your candle" className={styles.image} />
        <Annotation param='container' top='41.6%' left='17.4%'/>
        <Annotation param='wax' top='25.3%' left='27.5%'/>
        <Annotation param='aroma' top='17.6%' left='49.52%'/>
        <Annotation param='wick' top='24.9%' left='72.3%'/>
        <Annotation param='color' top='41.48%' left='82.1%'/>
      </div>
    </div>
  );
};

export default SchematicCandle;
