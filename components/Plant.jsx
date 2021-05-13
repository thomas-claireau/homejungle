import Image from "next/image";
import PropTypes from "prop-types";

import styles from "@/styles/components/Plant.module.scss";

import Range from "./Range";

export default function Plant({ data, addToCart, setCartOpen }) {
  return (
    <div className={styles.plant}>
      <data value={data.price}>
        <span>{data.price} €</span>
      </data>
      <figure>
        <Image src={data.cover} width={350} height={350} />
      </figure>
      <h3>
        <span>{data.name}</span>
        <div className={styles.ranges}>
          <Range number={data.water} type="water" />
          <Range number={data.light} type="sun" />
        </div>
      </h3>
      <button
        className={styles.atc}
        onClick={() => {
          addToCart(data);
          setCartOpen(true);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

Plant.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  setCartOpen: PropTypes.func.isRequired,
};
