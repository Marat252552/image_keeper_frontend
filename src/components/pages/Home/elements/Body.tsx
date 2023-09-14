import WorkSpace from "../../../widgets/WorkSpace";
import styles from "./../lib/styles.module.css";
import NoImagesWindow from "./NoImagesWindow";
import { Image_T } from "../../../shared/lib/types";
import { TimePeriod_T } from "../../../../state/types";


const Body = ({images, timePeriods}: {images: Image_T[], timePeriods: TimePeriod_T[]}) => {

  return (
    <div className={styles.body_container}>
      {!timePeriods[0] && <NoImagesWindow />}
      {timePeriods.map((timePeriod) => {
        return (
          <WorkSpace
            key={timePeriod.date}
            allImages={images}
            timePeriod={timePeriod}
          />
        );
      })}
    </div>
  );
};

export default Body;
