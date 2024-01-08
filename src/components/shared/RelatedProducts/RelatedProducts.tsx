'use client';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@components/components/Container/Container';
import ReusableSlider from '@components/components/ReusableSlider/ReusableSlider';
import Section from '@components/components/Section/Section';
import Typography from '@components/components/Typography/Typography';
import { useLangFromPathname } from '@components/hooks';
import { useWindowSize } from 'usehooks-ts';

import type { BoxDetailsI, CandleDetailsI } from '../../../types';
import Price from '../Price/Price';

import styles from './RelatedProducts.module.scss';

interface RelatedProductsI {
  relatedProducts: CandleDetailsI[] | BoxDetailsI[];
  title: string;
}

const RelatedProducts: React.FC<RelatedProductsI> = ({
  relatedProducts,
  title,
}) => {
  const { width } = useWindowSize();
  const lang = useLangFromPathname();

  let slidesToShow = 2;
  if (width >= 768) {
    slidesToShow = 4;
  }

  return (
    <Section id={styles.related_products_section}>
      <Container>
        <Typography
          variant="subheadingBold"
          className={styles.related_products_title}
          color="var(--cl-primary-800)"
        >
          {title}
        </Typography>
        <ReusableSlider
          slidesToShow={slidesToShow}
          dots
          dotsStyles={styles.dots}
        >
          {relatedProducts.map(
            ({
              id,
              slug,
              images,
              title,
              price,
              name,
            }: CandleDetailsI | BoxDetailsI) => (
              <div key={id} className={styles.card}>
                <Link href={`/${lang}${slug}/${id}`}>
                  <div className={styles.img_container}>
                    <Image
                      src={images[0]}
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
                  <Typography
                    variant="bodyRegular"
                    className={styles.title}
                    title={title}
                  >
                    {name}
                  </Typography>
                </Link>
                <Price price={price} />
              </div>
            )
          )}
        </ReusableSlider>
      </Container>
    </Section>
  );
};

export default RelatedProducts;
