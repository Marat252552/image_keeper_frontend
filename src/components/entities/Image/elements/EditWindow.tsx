import styles from "./../lib/styles.module.css";
import { Image_T } from "../../../shared/lib/types";
import { useState } from "react";
import SetLabelAPI from "../../../../api/actions/SetLabelAPI";
import { useAppDispatch } from "../../../../state/hooks";
import MainSlice from "../../../../state/Reducers/MainSlice";
import GrayButtonTemplate from "../../../shared/templates/GrayButtonTemplate";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";

const EditWindow = ({
  image,
  setActive,
}: {
  image: Image_T;
  setActive: (value: boolean) => void;
}) => {
  const [value, setValue] = useState(image.label);
  const dispatch = useAppDispatch();
  const { updateImage, updateTimePeriods } = MainSlice.actions;

  const EditLabel = async () => {
    try {
      if (value === image.label || value.length > 100) return;
      const response = await SetLabelAPI({ image_id: image._id, label: value });
      dispatch(updateImage({ image: response.data.image }));
      dispatch(updateTimePeriods());
    } catch (e) {
      console.log(e);
    } finally {
      setActive(false);
    }
  };

  return (
    <div className={styles.editWindow_container}>
      <div
        onClick={() => setActive(false)}
        style={{ width: "100%", display: "flex", justifyContent: "end" }}
      >
        <GrayButtonTemplate icon={<CloseOutlined />} text="Close Editor"/>
      </div>
      <div className={styles.editWindowInfo}>
        <span style={{ fontWeight: "700" }}>Set Custom Label</span>
        <img className={styles.image} draggable="false" src={image.src} />
        <input
          className={styles.editInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
          }}
          value={value}
        ></input>
        <span style={{ fontSize: "8px" }}>100 chars max</span>

        <div onClick={EditLabel}>
          <GrayButtonTemplate text="Save" icon={<SaveOutlined />} />
        </div>
      </div>
    </div>
  );
};

export default EditWindow;
