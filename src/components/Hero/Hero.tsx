'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import Slider, { Settings } from 'react-slick';
import { avenir } from '@components/app/fonts';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import heroCards from './heroCards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Hero.module.css';

const sliderSettings: Settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  arrows: false,
  draggable: true,
  swipe: true,
  appendDots: (dots: React.ReactNode) => <ul>{dots}</ul>,
  dotsClass: styles['dots'],
  customPaging: () => <button></button>,
};

const Hero = () => {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const disablePrevButton = currentSlide === 0;
  const disableNextButton = currentSlide === heroCards.length - 1;

  const handlePrevClick = () => {
    if (!disablePrevButton && sliderRef.current) {
      sliderRef.current.slickPrev();
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (!disableNextButton && sliderRef.current) {
      sliderRef.current.slickNext();
      setCurrentSlide(prev => prev + 1);
    }
  };

  return (
    <Section className={styles.sectionWrapper}>
      <Container>
        <Slider
          ref={sliderRef}
          speed={700}
          {...sliderSettings}
          beforeChange={(prev, next) => setCurrentSlide(next)}
        >
          {heroCards.map(
            ({
              id,
              backgroundImage,
              buttonText,
              heading1,
              heading2,
              heading3,
            }) => (
              <div key={id} className={styles.body}>
                <div className={styles.controls}>
                  <button
                    onClick={handlePrevClick}
                    className={`${styles.prevButton} ${
                      disablePrevButton ? styles.disabled : ''
                    }`}
                    disabled={disablePrevButton}
                  >
                    <HiOutlineChevronLeft className={styles.arrowIcon} />
                  </button>
                  <button
                    onClick={handleNextClick}
                    className={`${styles.nextButton} ${
                      disableNextButton ? styles.disabled : ''
                    }`}
                    disabled={disableNextButton}
                  >
                    <HiOutlineChevronRight className={styles.arrowIcon} />
                  </button>
                </div>
                <div className={styles.imageContainer}>
                  <Image
                    src={backgroundImage}
                    alt="Background Image"
                    quality={100}
                    priority
                    fill
                    sizes="(min-width: 1230) 1200px,
                    (min-width: 1024) 976px,
                    (min-width: 768px) 720px,
                    (min-width: 667px) 619px,
                    327px"
                    className={styles.bgImage}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.heading}>
                    <Typography
                      variant="heading1"
                      className={avenir.className}
                      color="var(--cl-secondary-50)"
                    >
                      {heading1}
                    </Typography>
                    <Typography
                      variant="heading1"
                      className={avenir.className}
                      color="var(--cl-secondary-50)"
                    >
                      {heading2}
                    </Typography>
                    <Typography
                      variant="heading1"
                      className={avenir.className}
                      color="var(--cl-secondary-50)"
                    >
                      {heading3}
                    </Typography>
                  </div>
                  <Button variant="primary">{buttonText}</Button>
                </div>
              </div>
            )
          )}
        </Slider>
      </Container>
    </Section>
  );
};

export default Hero;
