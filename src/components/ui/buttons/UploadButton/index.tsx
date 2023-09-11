import styles from "./lib/styles.module.css";
import upload_image from "./../../../../assets/upload.svg";
import AddImageAPI from "../../../../api/actions/AddImage";
import { useAppDispatch } from "../../../../state/hooks";
import MainSlice from "../../../../state/Reducers/MainSlice";
import GrayButtonTemplate from "../../../shared/templates/GrayButtonTemplate";

const UploadButton = () => {
  const dispatch = useAppDispatch();
  const { addImage, updateTimePeriods } = MainSlice.actions;

  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files?.length) return;
    for (let i = 0; i < files?.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      const {
        data: { image },
      } = await AddImageAPI(formData);
      dispatch(addImage({ image }));
      dispatch(updateTimePeriods());
    }
  };

  return (
    <label className={styles.file_upload}>
      <GrayButtonTemplate
        icon={<img draggable="false" src={upload_image} />}
        text="Upload Image"
        children={<input multiple onChange={uploadFiles} type="file" />}
      />
    </label>
  );
};

export default UploadButton;
