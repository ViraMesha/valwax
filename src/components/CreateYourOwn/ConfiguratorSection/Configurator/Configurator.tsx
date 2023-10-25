// import React from 'react'

import { ConfiguratorSectionI } from "../../../../types/index";

import Parameter from "./Parameter/Parameter";
import { configuratorData } from './configuratorData';

import styles from './Configurator.module.scss';


const Configurator: React.FC<ConfiguratorSectionI> = ({ dict }) => {

  const data = configuratorData(dict);

  return (
    <ul className={styles.list}>
      <Parameter dict={data.container}/>
      {/* <Parameter dict={data.capacity}/> */}
      <Parameter dict={data.wax}/>
      <Parameter dict={data.aroma}/>
      <Parameter dict={data.wick}/>
      <Parameter dict={data.color}/>
    </ul>
  );
};


export default Configurator