import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <Link href="/">
        <a>Головна</a>
      </Link>
      <Link href="#">
        <a>Свічки</a>
      </Link>
      <Link href="#">
        <a>Створи Сам</a>
      </Link>
      <Link href="#">
        <a>Бокси</a>
      </Link>
      <Link href="#">
        <a>Оплата та Доставка</a>
      </Link>
    </>
  );
};

export default Navigation;
