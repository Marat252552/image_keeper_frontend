import styles from "./lib/styles.module.css";
import upload_image from "./../../../../assets/upload.svg";

const UploadButton = () => {
  return (
    <div className={styles.container}>
      <img draggable="false" src={upload_image} />

      <div className={styles.text_module}>Upload Image</div>
    </div>
  );
};

export default UploadButton;
