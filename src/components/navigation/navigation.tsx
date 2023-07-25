"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Typography from "@components/components/Typography/Typography";
import styles from "./navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (link: string) => pathname === link;
  return (
    <nav>
      <ul className={styles.navigationList}>
        <li className={isActive("") ? styles.activeLink : ""}>
          <Link href="">
            <Typography variant="bodyL" color="var(--cl---gray-700)">
              Головна
            </Typography>
          </Link>
        </li>
        <li className={isActive("#") ? styles.activeLink : ""}>
          <Link href="#">
            <Typography variant="bodyL" color="var(--cl---gray-700)">
              Свічки
            </Typography>
          </Link>
        </li>
        <li className={isActive("#") ? styles.activeLink : ""}>
          <Link href="#">
            <Typography variant="bodyL" color="var(--cl---gray-700)">
              Створи Сам
            </Typography>
          </Link>
        </li>
        <li className={isActive("#") ? styles.activeLink : ""}>
          <Link href="#">
            <Typography variant="bodyL" color="var(--cl---gray-700)">
              Бокси
            </Typography>
          </Link>
        </li>
        <li className={isActive("#") ? styles.activeLink : ""}>
          <Link href="#">
            <Typography variant="bodyL" color="var(--cl---gray-700)">
              Оплата та Доставка
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
