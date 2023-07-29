'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Slider from 'react-slick';
import { avenir } from '@components/app/fonts';

import Button from '../Button/Button';
import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import heroCards from './heroCards';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Hero.module.css';

const sliderSettings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  dots: true,
  arrows: false,
};

const Hero = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  return (
    <Section className={styles.sectionWrapper}>
      <Container>
        <Slider ref={setSliderRef} {...sliderSettings}>
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
                    onClick={sliderRef?.slickPrev}
                    className={styles.prevButton}
                  >
                    <FaChevronLeft className={styles.arrowIcon} />
                  </button>
                  <button
                    onClick={sliderRef?.slickNext}
                    className={styles.nextButton}
                  >
                    <FaChevronRight className={styles.arrowIcon} />
                  </button>
                </div>
                <Image
                  src={backgroundImage}
                  alt="Background Image"
                  width={1200}
                  height={650}
                  quality={100}
                  priority
                  className={styles.bgImage}
                />
                <div className={styles.content}>
                  <div className={styles.heading}>
                    <Typography variant="heading1" className={avenir.className}>
                      {heading1}
                    </Typography>
                    <Typography variant="heading1" className={avenir.className}>
                      {heading2}
                    </Typography>
                    <Typography variant="heading1" className={avenir.className}>
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
