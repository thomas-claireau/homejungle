import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";

import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Plants from "@/components/Plants";

export default function Home() {
  const [theme, setTheme] = useState(""); // dark theme by default
  const [cartOpen, setCartOpen] = useState(false); // disable by default
  const [cart, setCart] = useState([]);

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
      <section className={styles.content}>
        <Header
          cart={cart}
          onClick={handleClick}
          theme={theme}
          setTheme={setLsTheme}
        />
        <Plants addToCart={addToCart} setCartOpen={handleClick} />
      </section>
    </main>
  );
}
