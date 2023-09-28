'use client';
import Image from 'next/image';
import { useState } from 'react';

import styles from './ProductImgGallery.module.scss';

const ProductImgGallery = ({ images }: { images: string[] }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const totalImages = images.length;
  const initialPercentage = ((activeImageIndex + 1) / totalImages) * 100;

  const [progressBarHeight, setProgressBarHeight] = useState(initialPercentage);

  const handleSmallImageClick = (index: number) => {
    setActiveImageIndex(index);
    const newPercentage = ((index + 1) / totalImages) * 100;
    setProgressBarHeight(newPercentage);
  };

  return (
    <div className={styles.product_detail_images__wrapper}>
      <ul className={styles.product_detail_images__img_container}>
        {images.map((_, i) => (
          <li key={i}>
            <Image
              className={styles.product_detail_images__image}
              src={images[activeImageIndex]}
              priority
              fill
              alt="Candle-making kit in a box"
              sizes="(min-width: 1230) 458px,
              (min-width: 1024) 604px,
              (min-width: 768) 358px,
              100%"
            />
          </li>
        ))}
      </ul>
      <div className={styles.product_detail_images__progress_bar}>
        <div
          className={styles.product_detail_images__progress_bar_progress}
          style={{ height: `${progressBarHeight}%` }}
        ></div>
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
    </div>
  );
};

export default ProductImgGallery;
