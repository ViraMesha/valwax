import Image from 'next/image';

import Container from '../Container/Container';
import Section from '../Section/Section';
import Typography from '../Typography/Typography';

import styles from './Instagram.module.scss';




const Instagram = async () => {
  const feed = await getInstData();
  const postsImages = feed.filter((item: {[key:string]: string}) => item.media_type === 'IMAGE')
  const posts = postsImages.slice(0, 4);

  return (
    <>
      <Section>
        <Container>
          <div className={styles.heading}>
            <Typography variant="subheading1" color="var(--cl-primary-800)">
              Instagram
            </Typography>
            <a
              href="https://www.instagram.com/valwax"
              aria-label="Посилання на istagram"
              target="_b"
              rel="noopener noreferrere"
              className={styles.link}
            >
              <Typography variant="bodyL" color="var(--cl-gray-500)">
                @valwax
              </Typography>
            </a>
          </div>
          <ul className={styles.gallery}>
            {posts.map((post: any) => (
              <li key={post.id} className={styles.box}>
                <Image
                  src={post.media_url}
                  alt="candle"
                  className={styles.img}
                  sizes="(min-width: 1230) 282px,
                    (min-width: 1024) 232px,
                    (min-width: 768px) 230px,
                    (min-width: 667px) 238px,
                    156px"
                    fill
                    unoptimized
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

const ApiKey = process.env.INSTAGRAM_KEY

export const getInstData = async () => {
  const url = `https://graph.instagram.com/me/media?&fields=id,caption,media_type,media_url&access_token=${ApiKey}`;
  const data = await fetch(url);
  const feed = await data.json();
  return feed.data;
};

export default Instagram;

