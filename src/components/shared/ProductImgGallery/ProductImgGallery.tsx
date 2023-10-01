'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import ReusableSlider from '@components/components/ReusableSlider/ReusableSlider';

import styles from './ProductImgGallery.module.scss';

const ProductImgGallery = ({ images }: { images: string[] }) => {
  const totalImages = images.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const initialPercentage = ((activeImageIndex + 1) / totalImages) * 100;

  const [progressBarHeight, setProgressBarHeight] = useState(initialPercentage);
  const slider1Ref = useRef<Slider | null>(null);

  const handleSmallImageClick = (index: number) => {
    setActiveImageIndex(index);
    const newPercentage = ((index + 1) / totalImages) * 100;
    setProgressBarHeight(newPercentage);
    slider1Ref.current?.slickGoTo(index);
  };

  return (
    <div className={styles.product_detail_images__wrapper}>
      <div className={styles.product_detail_images__img_container}>
        <ReusableSlider
          vertical
          verticalSwiping
          ref={slider1Ref}
          swipeToSlide={true}
          afterChange={(index: number) => handleSmallImageClick(index)}
        >
          {images.map((imageSrc, i) => (
            <div
              key={i}
              className={styles.product_detail_images__img_inner_container}
            >
              <Image
                className={styles.product_detail_images__image}
                src={imageSrc}
                priority
                fill
                alt="Candle-making kit in a box"
                sizes="(min-width: 1230) 458px,
              (min-width: 1024) 604px,
              (min-width: 768) 358px,
              100%"
              />
            </div>
          ))}
        </ReusableSlider>
      </div>
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
