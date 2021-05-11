import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CrossSVG from "@/public/images/cancel.svg";
import TrashSVG from "@/public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart({ isOpen, onClick, plants }) {
  const [open, setOpen] = useState(isOpen);
  const [plantsInCart, setPlantsInCart] = useState(plants);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setPlantsInCart(plants);
  }, [plants]);

  return (
    <aside className={`${styles.cart} ${open ? styles["cart--open"] : ""}`}>
      <CrossSVG className={styles.cross} onClick={onClick} />
      <div className={styles.header}>
        <h2>Panier</h2>
        <TrashSVG />
      </div>
      <ul>
        {plantsInCart &&
          plantsInCart.map((plantInCart) => {
            {
              <li className={styles.product}>
                <div className="left">
                  <Image
                    src={plantInCart.cover}
                    alt="cactus"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.right}>
                  <span className="name">{plantInCart.name}</span>
                  <span className="price">{plantInCart.price} €</span>
                </div>
              </li>;
            }
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
