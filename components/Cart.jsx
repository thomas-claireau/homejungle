import CrossSVG from "@/public/images/cancel.svg";
import TrashSVG from "@/public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart() {
  return (
    <aside className={styles.cart}>
      <CrossSVG className={styles.cross} />
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
        Total : <span></span>
      </div>
    </aside>
  );
}
