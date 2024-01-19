
import Image from 'next/image';
import yourCandle from '@images/create-your-own/Candle2.png';

import Annotation from './Annotation/Annotation';

import styles from './SchematicCandle.module.scss';

const SchematicCandle: React.FC = () => {

  return (
    <div className={styles.div}>
      {/* image configurator */}
      <div className={styles.wrapper}>
        <Image src={yourCandle} alt="your candle" className={styles.image} />
        <Annotation param='container' top='54.7%' left='11.7%'/>
        <Annotation param='wax' top='25.9%' left='21.3%'/>
        <Annotation param='aroma' top='14.1%' left='49.85%'/>
        <Annotation param='wick' top='25.9%' left='78.55%'/>
        <Annotation param='color' top='54.7%' left='88.2%'/>
      </div>
    </div>
  );
};

export default SchematicCandle;
