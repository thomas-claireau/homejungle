import { plantList } from "../public/data";
import Plant from "./Plant";

import styles from "@/styles/components/Plants.module.scss";

export default function Plants({ addToCart }) {
  return (
    <section className={styles.plants}>
      {plantList.map((plant, index) => (
        <Plant key={index} data={plant} addToCart={addToCart} />
      ))}
    </section>
  );
}
