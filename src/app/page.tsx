import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Instagram from "../components/instagram/instagram";
import Navigation from "../components/navigation/navigation";

// приклад використання типографії і другого фонту
// import Typography from "@components/components/Typography/Typography";
// import { avenir } from "./fonts";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
      {/* <Typography
        variant="heading1"
        className={avenir.className}
        color="var(--cl-secondary-900)"
      >
        Запалюйте світло
      </Typography> */}
      <nav>
        <Link href="/candle">Candle page</Link>
      </nav>

      <Instagram />
      <Navigation />
    </main>
  );
}
