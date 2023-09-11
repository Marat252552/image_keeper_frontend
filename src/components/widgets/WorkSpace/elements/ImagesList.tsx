import Image from "../../../entities/Image";
import styles from "./../lib/styles.module.css";
import { ImagesList_T } from "../lib/types";

const ImagesList: ImagesList_T = ({images, deleteImage}) => {
  return (
    <div className={styles.imagesList_container}>
      {images && images.map((image) => {
        return <Image key={image._id} deleteImage={deleteImage} image={image}/>
      })}
    </div>
  );
};

export default ImagesList;
