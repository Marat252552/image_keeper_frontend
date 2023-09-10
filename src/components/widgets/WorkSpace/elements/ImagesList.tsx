import Image from "../../../entities/Image";
import styles from "./../lib/styles.module.css";
import { Image_T } from "../../../shared/lib/types";
import { ImagesList_T } from "../lib/types";

const ImagesList: ImagesList_T = ({images, deleteImage}) => {
  console.log(images)
  return (
    <div className={styles.imagesList_container}>
      {images && images.map((image) => {
        return <Image key={image._id} deleteImage={deleteImage} image={image}/>
      })}
    </div>
  );
};

export default ImagesList;
