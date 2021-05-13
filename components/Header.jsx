import Image from "next/image";
import PropTypes from "prop-types";

import styles from "@/styles/components/Header.module.scss";

import CartSVG from "@/public/images/shopping-cart.svg";

export default function Header({ cart, onClick, theme, setTheme }) {
  const cartLength = cart.length;

  const toggleTheme = () => {
    return theme == "dark" ? "light" : "dark";
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        <h1>home jungle</h1>
      </div>
      <div className={styles["cart-container"]}>
        <span
          className={`${styles["toggle-theme"]} ${styles[theme]}`}
          onClick={() => setTheme(toggleTheme(theme))}
        ></span>
        <CartSVG
          className={`${styles.svg} ${!cartLength ? styles.disallow : ""}`}
          onClick={() => (cartLength ? onClick() : false)}
        />
        {cartLength > 0 && <span className={styles.count}>{cartLength}</span>}
      </div>
    </header>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};
