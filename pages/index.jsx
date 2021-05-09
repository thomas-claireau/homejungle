import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Home.module.scss";

import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Articles from "@/components/Articles";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false); // disable by default

  const handleClick = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <main className={styles.main}>
      <Cart isOpen={cartOpen} onClick={handleClick} />
      <section className={styles.content}>
        <Header onClick={handleClick} />
        <Articles />
      </section>
    </main>
  );
}
