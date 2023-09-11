import styles from "./lib/styles.module.css";
import { MakeImage_T } from "./lib/types";
import DeleteImageButton from "../../ui/buttons/DeleteImageButton";
import EditImageButton from "../../ui/buttons/EditImageButton";
import OpenImageButton from "../../ui/buttons/OpenImageButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import EditWindow from "./elements/EditWindow";


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
            <Link to={image.src}>
              <OpenImageButton />
            </Link>
            <EditImageButton
              onClick={() => {
                setActive((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
