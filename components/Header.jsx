import Image from "next/image";
import styles from "@/styles/components/Header.module.scss";

import CartSVG from "@/public/images/shopping-cart.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <h1>Home Jungle</h1>
      </div>
      <CartSVG className={styles.svg} />
    </header>
  );
}
