'use client';
import Image from 'next/image';
import { useState } from 'react';
import Slider, { Settings } from 'react-slick';

import styles from './BoxDetailsGallery.module.scss';

const BoxDetailsGallery = ({ images }: { images: string[] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSmallImageClick = (index: number) => {
    setActiveImageIndex(index);
  };
  return (
    <>
      <div className={styles.img_container}>
        <Image
          className={styles.image}
          src={images[activeImageIndex]}
          priority
          fill
          alt="Candle-making kit in a box"
          sizes="(min-width: 1230) 660px,
              (min-width: 1024) 604px,
              (min-width: 768) 358px,
              100%"
        />
        <div className={styles.dots}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${
                index === activeImageIndex ? styles.active : ''
              }`}
              onClick={() => handleSmallImageClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.small_img_container}>
        {images.map((imageSrc, index) => (
          <div
            key={index}
            className={styles.small_img_inner_container}
            onClick={() => handleSmallImageClick(index)}
          >
            <Image
              className={`${index === activeImageIndex ? styles.active : ''}`}
              src={imageSrc}
              priority
              fill
              alt="Candle-making kit in a box"
              sizes="(min-width: 1230) 130px,
              (min-width: 1024) 125px,
              (min-width: 768px) 84px,
              (min-width: 667px) 130px,
              76px"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BoxDetailsGallery;
