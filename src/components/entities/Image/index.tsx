import styles from "./lib/styles.module.css";
import { MakeImage_T } from "./lib/types";
import DeleteImageButton from "../../ui/buttons/DeleteImageButton";
import EditImageButton from "../../ui/buttons/EditImageButton";
import OpenImageButton from "../../ui/buttons/OpenImageButton";

const Image: MakeImage_T = ({ image, deleteImage, openEditor, openImage }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} draggable="false" src={image.src} />
      <div className={styles.image_menu}>
        <span>{image.label}</span>

        <div className={styles.buttons_module}>
          <DeleteImageButton onClick={deleteImage} />
          <OpenImageButton onClick={openImage} />
          <EditImageButton onClick={openEditor} />
        </div>
      </div>
    </div>
  );
};

export default Image;
