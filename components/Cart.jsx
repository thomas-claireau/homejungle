import { useState } from "react";

import CrossSVG from "@/public/images/cancel.svg";
import TrashSVG from "@/public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    return setOpen(!open);
  };

  return (
    <aside className={`${styles.cart} ${open ? styles["cart--open"] : ""}`}>
      <CrossSVG className={styles.cross} onClick={handleClick} />
      <div className={styles.header}>
        <h2>Panier</h2>
        <TrashSVG />
      </div>
      <ul>
        <li className={styles.product}>
          <div className="left">
            <Image
              src="/images/cactus.jpg"
              alt="cactus"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.right}>
            <span className="name">Cactus</span>
            <span className="price">15€</span>
          </div>
        </li>
        <li className={styles.product}>
          <div className="left">
            <Image
              src="/images/cactus.jpg"
              alt="cactus"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.right}>
            <span className="name">Cactus</span>
            <span className="price">15€</span>
          </div>
        </li>
      </ul>
      <div className={styles.total}>
        Total : <span>35€</span>
      </div>
    </aside>
  );
}
