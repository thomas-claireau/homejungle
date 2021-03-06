import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import CrossSVG from "@/public/images/cancel.svg";
import TrashSVG from "@/public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart({
  isOpen,
  onClick,
  plants,
  clearCart,
  deleteFromCart,
}) {
  const [open, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const prices = plants && plants.map((item) => item.price);

  return (
    <aside className={`${styles.cart} ${open ? styles["cart--open"] : ""}`}>
      <CrossSVG className={styles.cross} onClick={() => onClick(false)} />
      <div className={styles.header}>
        <h2>Panier</h2>
        <TrashSVG onClick={clearCart} />
      </div>
      <ul>
        {plants.length > 0 &&
          Object.entries(groupByKey(plants, "id")).map((plant) => {
            const index = plant[0];
            plant = plant[1];

            return (
              <li key={index} className={styles.product}>
                <div className="left">
                  <Image
                    src={plant[0].cover}
                    alt="cactus"
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.right}>
                  <div>
                    <span className={styles.name}>
                      {plant[0].name} x{plant.length}
                    </span>
                    <span
                      className={styles.delete}
                      onClick={() => deleteFromCart(plant[0].id)}
                    >
                      Supprimer
                    </span>
                  </div>
                  <span className="price">{plant[0].price} €</span>
                </div>
              </li>
            );
          })}
      </ul>
      <div className={styles.total}>
        Total : <span>{prices.reduce(sum, 0) || 0}€</span>
      </div>
    </aside>
  );
}

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  plants: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
  deleteFromCart: PropTypes.func.isRequired,
};

function groupByKey(list, key) {
  return list.reduce(
    (hash, obj) => ({
      ...hash,
      [obj[key]]: (hash[obj[key]] || []).concat(obj),
    }),
    {}
  );
}

function sum(acc, val) {
  return acc + val;
}
