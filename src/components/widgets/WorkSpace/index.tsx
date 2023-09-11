import ImagesList from "./elements/ImagesList";
import styles from "./lib/styles.module.css";
import WorkSpaceHeader from "./elements/WorkSpaceHeader";
import { WorkSpace_T } from "./lib/types";
import GetFullDateAndLabel from "../../shared/helpers/GetFullDateAndLabel";

const WorkSpace: WorkSpace_T = ({ allImages, timePeriod }) => {
  const images = allImages.filter(image => {
    const {fullDate} = GetFullDateAndLabel(image.createdAt)
    return fullDate === timePeriod.date
  })

  return (
    <div className={styles.container}>
      <WorkSpaceHeader header={timePeriod.label} amount={images.length} />
      <ImagesList images={images} />
    </div>
  );
};

export default WorkSpace;
