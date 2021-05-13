import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CrossSVG from "@/public/images/cancel.svg";
import TrashSVG from "@/public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart({ isOpen, onClick, plants, clearCart }) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <aside className={`${styles.cart} ${open ? styles["cart--open"] : ""}`}>
      <CrossSVG className={styles.cross} onClick={() => onClick(false)} />
      <div className={styles.header}>
        <h2>Panier</h2>
        <TrashSVG onClick={clearCart} />
      </div>
      <ul>
        {plants &&
          plants.map((plant, index) => {
            return (
              <li key={index} className={styles.product}>
                <div className="left">
                  <Image
                    src={plant.cover}
                    alt="cactus"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.right}>
                  <span className="name">{plant.name}</span>
                  <span className="price">{plant.price} €</span>
                </div>
              </li>
            );
          })}
      </ul>
      <div className={styles.total}>
        Total : <span></span>
      </div>
    </aside>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool,
};
