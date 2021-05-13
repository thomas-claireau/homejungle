import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.scss";

import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Plants from "@/components/Plants";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false); // disable by default
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const handleClick = (status = !cartOpen) => {
    setCartOpen(status);
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
    <main className={styles.main}>
      <Cart
        isOpen={cartOpen}
        onClick={handleClick}
        plants={cart}
        clearCart={clearCart}
        deleteFromCart={deleteFromCart}
      />
      <section className={styles.content}>
        <Header cart={cart} onClick={handleClick} />
        <Plants addToCart={addToCart} setCartOpen={handleClick} />
      </section>
    </main>
  );
}
