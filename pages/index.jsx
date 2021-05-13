import { useState, useEffect } from "react";

import styles from "@/styles/Home.module.scss";

import Scrollbar from "react-scrollbars-custom";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Plants from "@/components/Plants";

import LinkedinSVG from "@/public/images/linkedin.svg";
import GithubSVG from "@/public/images/github.svg";

export default function Home() {
  const [theme, setTheme] = useState(""); // dark theme by default
  const [cartOpen, setCartOpen] = useState(false); // disable by default
  const [cart, setCart] = useState([]);

  const date = new Date();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  const handleClick = (status = !cartOpen) => {
    setCartOpen(status);
  };

  const setLsTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const setLsCart = (array) => {
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(array));
  };

  const addToCart = (plant) => {
    setLsCart([...cart, plant]);
  };

  const clearCart = () => {
    setLsCart([]);
    setCartOpen(false);
  };

  const deleteFromCart = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);

    setLsCart(filterCart);

    if (!filterCart.length) setCartOpen(false);
  };

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <Cart
        isOpen={cartOpen}
        onClick={handleClick}
        plants={cart}
        clearCart={clearCart}
        deleteFromCart={deleteFromCart}
      />
      <Scrollbar
        style={{ width: "100%", height: "100vh" }}
        noScrollX={true}
        mobileNative={true}
        className={styles.content}
      >
        <Header
          cart={cart}
          onClick={handleClick}
          theme={theme}
          setTheme={setLsTheme}
        />
        <Plants addToCart={addToCart} setCartOpen={handleClick} />
        <footer>
          <div>© {date.getFullYear()} - Thomas Claireau</div>
          <div>
            <a
              href="https://github.com/thomas-claireau/homejungle"
              target="_blank"
            >
              <GithubSVG />
            </a>
            <a
              href="https://www.linkedin.com/in/thomas-claireau/"
              target="_blank"
            >
              <LinkedinSVG />
            </a>
          </div>
        </footer>
      </Scrollbar>
    </main>
  );
}
