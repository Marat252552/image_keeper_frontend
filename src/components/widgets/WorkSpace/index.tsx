import ImagesList from "./elements/ImagesList";
import styles from "./lib/styles.module.css";
import WorkSpaceHeader from "./elements/WorkSpaceHeader";
import { WorkSpace_T } from "./lib/types";
import GetFullDateAndLabel from "../../shared/helpers/GetFullDateAndLabel";

const WorkSpace: WorkSpace_T = ({ allImages, timePeriod, deleteImage, editImage }) => {
  console.log(allImages)
  const images = allImages.filter(image => {
    const {fullDate} = GetFullDateAndLabel(image.createdAt)
    return fullDate === timePeriod.date
  })
  console.log(images)

  return (
    <div className={styles.container}>
      <WorkSpaceHeader header={timePeriod.label} amount={images.length} />
      <ImagesList deleteImage={deleteImage} editImage={editImage} images={images} />
    </div>
  );
};

export default WorkSpace;
