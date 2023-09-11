import styles from "./lib/styles.module.css";
import { MakeImage_T } from "./lib/types";
import DeleteImageButton from "../../ui/buttons/DeleteImageButton";
import { useState } from "react";
import EditWindow from "./elements/EditWindow";
import OpenButton from "./elements/OpenImageButton";
import EditButton from "./elements/EditButton";


const Image: MakeImage_T = ({ image, deleteImage }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      {active && <EditWindow setActive={setActive} image={image} />}
      <div className={styles.container}>
        <img className={styles.image} draggable="false" src={image.src} />
        <div className={styles.image_menu}>
          <span>{image.label}</span>

          <div className={styles.buttons_module}>
            <DeleteImageButton
              onClick={() => {
                deleteImage(image);
              }}
            />
            <OpenButton src={image.src} />
            <EditButton setActive={setActive} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
