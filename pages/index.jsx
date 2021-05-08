import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.scss";

import Header from "@/components/Header";
import Cart from "@/components/Cart";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className={styles.main}>
        <Cart />
        <Articles />
      </main>
    </React.Fragment>
  );
}
