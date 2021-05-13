import Image from "next/image";
import styles from "@/styles/components/Header.module.scss";

import CartSVG from "@/public/images/shopping-cart.svg";

export default function Header({ cart, onClick }) {
  const cartLength = cart.length;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <h1>home jungle</h1>
      </div>
      <div className={styles["cart-container"]}>
        <CartSVG
          className={`${styles.svg} ${!cartLength ? styles.disallow : ""}`}
          onClick={() => (cartLength ? onClick() : false)}
        />
        {cartLength > 0 && <span>{cartLength}</span>}
      </div>
    </header>
  );
}
