'use client';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';
import Container from '@components/components/Container/Container';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';
import { useWindowSize } from 'usehooks-ts';

import { CandleI } from '../../../../lib/types';

import styles from './RelatedProducts.module.scss';

interface RelatedProductsI {
  relatedProducts: CandleI[];
  dict: {
    title: string;
  };
}

const RelatedProducts: React.FC<RelatedProductsI> = ({
  relatedProducts,
  dict,
}) => {
  const { width } = useWindowSize();

  let slidesToShow = 2;
  if (width >= 768) {
    slidesToShow = 4;
  }

  const sliderSettings: Settings = {
    slidesToShow,
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

  return (
    <Section id={styles.related_products_section}>
      <Container>
        <Typography
          variant="subheadingBold"
          className={styles.related_products_title}
        >
          {dict.title}
        </Typography>
        <Slider {...sliderSettings}>
          {relatedProducts.map(({ id, link, img, title, price }: CandleI) => (
            <div key={id} className={styles.card}>
              <Link href={link}>
                <div className={styles.img_container}>
                  <Image
                    src={img}
                    fill
                    priority
                    alt={title}
                    sizes="(min-width: 1230) 282px,
                    (min-width: 1024) 312px,
                    (min-width: 768px) 224px,
                    (min-width: 667px) 300px,
                    154px"
                  />
                </div>
                <Typography variant="bodyRegular" className={styles.title}>
                  {title}
                </Typography>
              </Link>
              <div className={styles.price_container}>
                <p className={styles.price}>{price}</p>
                <span>&#8372;</span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default RelatedProducts;
