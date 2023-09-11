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

import { generateHeroCards } from './heroCards';

import styles from './Hero.module.scss';

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

interface HeroI {
  dict: { heading: string[][]; buttonText: string };
}

const Hero: React.FC<HeroI> = ({ dict }) => {
  const sliderRef = useRef<Slider | null>(null);
  const heroData = generateHeroCards(dict);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const disablePrevButton = currentSlide === 0;
  const disableNextButton = currentSlide === heroData.length - 1;

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
        <div className={styles.body}>
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
          <Slider
            ref={sliderRef}
            speed={700}
            {...sliderSettings}
            beforeChange={(prev, next) => setCurrentSlide(next)}
          >
            {heroData.map(({ id, backgroundImage, headings }) => (
              <div key={id} className={styles.slider_body}>
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
                <div className={styles.content}>
                  <div className={styles.heading}>
                    {headings.map((title: string, index: number) => (
                      <Typography
                        key={index}
                        variant="heading1"
                        className={avenir.className}
                        color="var(--cl-secondary-50)"
                      >
                        {title}
                      </Typography>
                    ))}
                  </div>
                  <Button variant="primary">{dict.buttonText}</Button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
