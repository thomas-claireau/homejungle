import PropTypes from "prop-types";

import styles from "@/styles/components/Range.module.scss";

import SunSVG from "@/public/images/sun.svg";
import WaterSVG from "@/public/images/water.svg";

export default function Range({ number, type }) {
  return (
    <div className={styles.range}>
      {Array.apply(null, { length: number }).map((item, index) =>
        type == "water" ? <WaterSVG key={index} /> : <SunSVG key={index} />
      )}
    </div>
  );
}

Range.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
