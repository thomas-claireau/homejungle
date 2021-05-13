import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";

import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Plants from "@/components/Plants";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false); // disable by default
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(localStorage.getItem("cart") || []);
  }, []);

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  return (
    <main className={styles.main}>
      <Cart isOpen={cartOpen} onClick={handleClick} plants={cart} />
      <section className={styles.content}>
        <Header cart={cart} onClick={handleClick} />
        <Plants addToCart={addToCart} />
      </section>
    </main>
  );
}
