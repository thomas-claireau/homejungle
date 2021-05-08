import CrossSVG from "../public/images/cancel.svg";
import TrashSVG from "../public/images/delete.svg";
import Image from "next/image";

import styles from "@/styles/components/Cart.module.scss";

export default function Cart() {
  return (
    <aside className={styles.cart}>
      <CrossSVG />
      <div className={styles.top}>
        <h2>Panier</h2>
        <TrashSVG />
      </div>
      <ul>
        <li>
          <div className="left">
            <Image
              src="/images/cactus.jpg"
              alt="cactus"
              width={30}
              height={30}
            />
          </div>
          <div className="right">
            <span className="name">Cactus</span>
            <span className="price">15€</span>
          </div>
        </li>
        <li>
          <div className="left">
            <Image
              src="/images/cactus.jpg"
              alt="cactus"
              width={30}
              height={30}
            />
          </div>
          <div className="right">
            <span className="name">Cactus</span>
            <span className="price">15€</span>
          </div>
        </li>
      </ul>
      <div className="total">
        Total : <span></span>
      </div>
    </aside>
  );
}
