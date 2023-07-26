import Image from "next/image";
import Link from "next/link";
import AboutUsSection from "@components/components/AboutUsSection/AboutUsSection";
// приклад використання типографії і другого фонту
// import Typography from "@components/components/Typography/Typography";
// import { avenir } from "./fonts";
import Button from "@components/components/Button/Button";
import Quote from "@components/components/Quote/Quote";

import Compass from "../components/Compass/Compass";
import Instagram from "../components/Instagram/Instagram";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      <AboutUsSection />
      <Quote />
      {/* <Typography
        variant="heading1"
        className={avenir.className}
        color="var(--cl-secondary-900)"
      >
        Запалюйте світло
      </Typography> */}

      <Button variant="primary">Переглянути Каталог</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary" hasIcon>
        Button Text
      </Button>
      <nav>
        <Link href="/candle">Candle page</Link>
      </nav>

      <Instagram />
      <Compass />

     
      
    </main>
  );
}
