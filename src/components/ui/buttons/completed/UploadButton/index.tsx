import styles from "./lib/styles.module.css";
import upload_image from "./../../../../../assets/upload.svg";
import AddImageAPI from "../../../../../api/actions/AddImageAPI";
import { useAppDispatch } from "../../../../../state/hooks";
import MainSlice from "../../../../../state/Reducers/MainSlice";
import GrayButtonTemplate from "../../../../shared/templates/GrayButtonTemplate";
import ErrorHandler from "../../../../../api/helpers/ErrorHandler";
import { message } from "antd";
import {useState} from 'react'


const UploadButton = () => {
  const dispatch = useAppDispatch();
  const { addImage } = MainSlice.actions;

  const [loading, setLoading] = useState(false)

  const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files?.length) return;
    for (let i = 0; i < files?.length; i++) {
      setLoading(true)
      try {
        const formData = new FormData();
        formData.append("file", files[i]);
        const {
          data: { image },
        } = await AddImageAPI(formData);
        dispatch(addImage({ image }));
        message.info(`${files[0].name} is uploaded`)
      } catch(e) {
        ErrorHandler(e)
        message.error(`${files[0].name} upload failed`)
      } finally {
        setLoading(false)
      }
    }
    e.target.files = null
  };

  return (
    <label className={styles.file_upload}>
      <GrayButtonTemplate
        icon={<img draggable="false" src={upload_image} />}
        text="Upload Image"
        loading={loading}
        children={<input multiple onChange={uploadFiles} type="file" />}
      />
    </label>
  );
};

export default UploadButton;
