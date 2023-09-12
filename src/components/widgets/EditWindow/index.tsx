import styles from "./lib/styles.module.css";
import { useState } from "react";
import SetLabelAPI from "../../../api/actions/SetLabelAPI";
import { useAppDispatch } from "../../../state/hooks";
import MainSlice from "../../../state/Reducers/MainSlice";
import ErrorHandler from "../../../api/helpers/ErrorHandler";
import { EditWindow_T } from "../../entities/Image/lib/types";
import SaveButton from "../../ui/buttons/completed/SaveButton";
import CloseButton from "../../ui/buttons/completed/CloseButton";


const EditWindow: EditWindow_T = ({ image, setActive }) => {
  const [value, setValue] = useState(image.label);
  const dispatch = useAppDispatch();
  const { updateImage } = MainSlice.actions;

  const EditLabel = async () => {
    try {
      if (value === image.label || value.length > 100) return;
      const response = await SetLabelAPI(image._id, value);
      dispatch(updateImage({ image: response.data.image }));
    } catch (e) {
      ErrorHandler(e);
    } finally {
      setActive(false);
    }
  };

  return (
    <div className={styles.editWindow_container}>
      <CloseButton onClick={() => setActive(false)} />
      <div className={styles.editWindowInfo}>
        <span style={{ fontWeight: "700" }}>Set Custom Label</span>
        <img className={styles.image} draggable="false" src={image.src} />
        <input
          className={styles.editInput}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        ></input>
        <span style={{ fontSize: "8px" }}>100 chars max</span>

        <SaveButton onClick={EditLabel} />
      </div>
    </div>
  );
};

export default EditWindow;
