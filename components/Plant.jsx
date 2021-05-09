import Image from "next/image";
import styles from "@/styles/components/Plant.module.scss";

import Range from "./Range";

export default function Plant({ data }) {
  return (
    <div>
      <data value={data.price}>{data.price} €</data>
      <figure>
        <Image src={data.cover} width={200} height={200} />
      </figure>
      <h3>{data.name}</h3>
      <Range number={data.water} type="water" />
      <Range number={data.light} type="sun" />
      <button className={styles.atc}>Add to cart</button>
    </div>
  );
}
