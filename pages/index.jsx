import { useState, useEffect } from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.scss";

import Scrollbar from "react-scrollbars-custom";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Plants from "@/components/Plants";

import LinkedinSVG from "@/public/images/linkedin.svg";
import GithubSVG from "@/public/images/github.svg";

let mounted = false;

export default function Home() {
  const [theme, setTheme] = useState(""); // dark theme by default
  const [cartOpen, setCartOpen] = useState(false); // disable by default
  const [cart, setCart] = useState([]);

  const date = new Date();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setTheme(localStorage.getItem("theme") || "dark");

    mounted = true;
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
      {mounted && (
        <Scrollbar
          style={{ width: "100%", height: "100vh" }}
          noScrollX={true}
          mobileNative={true}
          className={styles.content}
        >
          <Head>
            <title>home jungle</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <link
              rel="apple-touch-icon"
              sizes="57x57"
              href="/favicon/apple-icon-57x57.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="60x60"
              href="/favicon/apple-icon-60x60.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="72x72"
              href="/favicon/apple-icon-72x72.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="76x76"
              href="/favicon/apple-icon-76x76.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="114x114"
              href="/favicon/apple-icon-114x114.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="120x120"
              href="/favicon/apple-icon-120x120.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="144x144"
              href="/favicon/apple-icon-144x144.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="152x152"
              href="/favicon/apple-icon-152x152.png"
            />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/favicon/apple-icon-180x180.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="192x192"
              href="/favicon/android-icon-192x192.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon/favicon-32x32.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="96x96"
              href="/favicon/favicon-96x96.png"
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon/favicon-16x16.png"
            />
            <link rel="manifest" href="/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
              name="msapplication-TileImage"
              content="/ms-icon-144x144.png"
            />
            <meta name="theme-color" content="#ffffff"></meta>
          </Head>
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
      )}
    </main>
  );
}
