import styles from "./../lib/styles.module.css";
import { ImagesList_T } from "../lib/types";
import Image_F from "../../../features/ImageContainer";

const ImagesList: ImagesList_T = ({images}) => {
  return (
    <div className={styles.imagesList_container}>
      {images && images.map((image) => {
        return <Image_F image={image} key={image._id}/>
      })}
    </div>
  );
};

export default ImagesList;
