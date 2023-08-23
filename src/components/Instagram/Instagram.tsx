import Image from 'next/image';

import imageInsta1 from '../../../public/images/insta/111.jpg';
import imageInsta2 from '../../../public/images/insta/222.jpg';
import imageInsta3 from '../../../public/images/insta/333.jpg';
import imageInsta4 from '../../../public/images/insta/4444.jpg';

import Container from '../Container/Container';
import Typography from '../Typography/Typography';
import Section from '../Section/Section';

import styles from './Instagram.module.css';

//  plug
const feed = [
  {
    id: '17968609187358267',
    caption:
      'Це точно те , що тобі потрібно! Якісь , стиль , краса 🤍 \n' +
      '\n' +
      '• соєвий віск \n' +
      '• аромат імбиря та спецій \n' +
      '• дерев’яний гніт \n' +
      '• 240 мл \n' +
      '\n' +
      'Обирай українське - обирай найкраще. 🤍\n' +
      '\n' +
      '#свічкиручноїроботи #свічкиvalwax #соєвісвічкиукраїна #свічки #свічкиручноїроботи',
    media_type: 'IMAGE',
    media_url: imageInsta1.src,
  },
  {
    id: '18260931583082495',
    caption:
      'Свічки , що створені з любов’ю. 🖤\n' +
      '\n' +
      '• соєвий віск \n' +
      '• 240 мл \n' +
      '• чаруючий аромат кашемірової сливи\n' +
      '• дерев’яний гніт \n' +
      '\n' +
      '#соєвісвічкиукраїна #соєвийвіск #свічкиручноїроботиукраїна #свічки',
    media_type: 'IMAGE',
    media_url: imageInsta2.src,
  },
  {
    id: '17876740628881252',
    caption:
      'Ця дерев’яна тара - любов з першого погляду 🫶🏻 \n' +
      '\n' +
      '• соєвий віск \n' +
      '• якісний аромат \n' +
      '• 100 мл \n' +
      '\n' +
      '#свічкиручноїроботи #соєвісвічкиукраїна #соєвийвіск',
    media_type: 'IMAGE',
    media_url: imageInsta3.src,
  },
  {
    id: '17962781468479914',
    caption:
      'Кашемірова слива. Твоє. Особливе. 🤍\n' +
      '\n' +
      '• соєвий віск \n' +
      '• якісний аромат \n' +
      '• дерев’яний гніт \n' +
      '• 240 мл \n' +
      '\n' +
      'Поринь у свій особливий аромат 🤍\n' +
      '\n' +
      '#свічкиручноїроботи #свічкиукраїна #соєвийвіск #соєвісвічкиукраїна',
    media_type: 'IMAGE',
    media_url: imageInsta4.src,
  },
  {
    id: '18043055869452756',
    caption:
      'Осінній MOOD. \n' +
      '\n' +
      'Імбирь та спеції. \n' +
      '\n' +
      '• соєвий віск \n' +
      '• якісний аромат \n' +
      '• дерев’яний гніт , що закохує \n' +
      '• 240 мл \n' +
      '\n' +
      'Спогади , про цю пору року викликають почуття тепла, а наша свічка це підкреслить. 🥰\n' +
      '\n' +
      '#соєвийвіск #свічкиручноїроботи #свічкиукраїна #аромасвічки',
    media_type: 'IMAGE',
    media_url:
      'https://scontent-iev1-1.cdninstagram.com/v/t51.29350-15/365189704_279939314726359_1357653650623217043_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ngeKjW34MbwAX9Wwpnq&_nc_ht=scontent-iev1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBq_m01RwTMSU4EM5QOjdG4oaa9AAa80mg61wIJ7iXm_w&oe=64E36CAD',
  },
  {
    id: '17984890709101002',
    caption:
      'Ну що , час знайомитись ? 🥰 \n' +
      '\n' +
      'Привіт , ми - VALWAX , український бренд з виготовлення свічок. \n' +
      '\n' +
      'Розповімо Вам трішки нашу історію. \n' +
      '\n' +
      'В свічеварстві ми вже більше року , але довго вагались робити відкриття нашого магазину. \n' +
      'Багато працювали , шукали найякісніші матеріали , цікаві ідеї та найсмачніші аромати. \n' +
      '\n' +
      'І ось , ми тут. Офіційне відкриття магазину вже скоро 🙈 . \n' +
      '\n' +
      'Тому ми починаємо заповнювати цю сторінку нашими витворами мистецтва. \n' +
      '\n' +
      'Запалюйте світло, пробуджуйте емоції, творіть натхнення разом з VALWAX . \n' +
      '\n' +
      'Чекаємо кожного 🤍',
    media_type: 'IMAGE',
    media_url:
      'https://scontent-iev1-1.cdninstagram.com/v/t51.29350-15/363507858_996678834691599_456352113301546316_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5hWX0UWJbUAAX8kgEXK&_nc_ht=scontent-iev1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAHyojAlBFionMUtEtVcg1yZzHNhMfc-442frHOP17PeQ&oe=64E32E02',
  },
];

const Instagram = async () => {
  // const feed = await getInstData();
  const posts = feed.slice(0, 4);

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
                  width={588}
                  height={798}
                  priority
                />
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
};

// export const getInstData = async () => {
//   const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${process.env.INSTAGRAM_KEY}`;
//   const data = await fetch(url);
//   const feed = await data.json();
//   return feed.data;
// };

export default Instagram;
