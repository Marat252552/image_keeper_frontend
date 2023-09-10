import { Info_T } from "../lib/types";
import styles from "./../lib/styles.module.css";

const Info: Info_T = ({ images_total }) => {
  return (
    <div className={styles.info}>
      {!images_total
        ? "no images in keeper yet"
        : `${images_total} images stored in keeper`}
    </div>
  );
};

export default Info;
