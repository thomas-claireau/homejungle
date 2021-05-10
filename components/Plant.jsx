import Image from "next/image";
import styles from "@/styles/components/Plant.module.scss";

import Range from "./Range";

export default function Plant({ data }) {
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
      <button className={styles.atc}>Add to cart</button>
    </div>
  );
}
