import { plantList } from "../public/data";
import Plant from "./Plant";

import styles from "@/styles/components/Plants.module.scss";

export default function Plants() {
  return (
    <section className={styles.plants}>
      {plantList.map((plant, index) => (
        <Plant key={index} data={plant} />
      ))}
    </section>
  );
}
