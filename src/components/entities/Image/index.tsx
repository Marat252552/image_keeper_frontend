import styles from "./lib/styles.module.css";
import { MakeImage_T } from "./lib/types";
import DeleteImageButton from "../../ui/buttons/completed/DeleteImageButton";
import EditImageButton from "../../ui/buttons/completed/EditImageButton";
import OpenButton from "../../ui/buttons/completed/OpenImageButton";

const Image: MakeImage_T = ({ image, deleteImage, openEditor, openImage }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} draggable="false" src={image.src} />

      <div className={styles.image_menu}>
        <span>{image.label}</span>

        <div className={styles.buttons_module}>
          <DeleteImageButton onClick={deleteImage} />
          <OpenButton onClick={openImage} />
          <EditImageButton onClick={openEditor} />
        </div>
      </div>
    </div>
  );
};

export default Image;
