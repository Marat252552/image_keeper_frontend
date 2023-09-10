import { useState } from "react";
import styles from "./lib/styles.module.css";
import { MakeImage_T } from "./lib/types";
import DeleteImageButton from "../../ui/buttons/DeleteImageButton";
import EditImageButton from "../../ui/buttons/EditImageButton";


const Image: MakeImage_T = ({ image, deleteImage, editImage }) => {

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} draggable="false" src={image.src} />
        <div className={styles.image_menu}>
            <DeleteImageButton onClick={() => {deleteImage(image)}} />
            <EditImageButton />
        </div>
      </div>    
    </>
  );
};

export default Image;
