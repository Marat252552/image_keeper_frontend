import { useState } from "react";
import LargeMaxFullWidthTemplate from "../../shared/templates/LargeMaxFullWidthTemplate";
import Header from "../../widgets/Header";
import Body from "./elements/Body";
import styles from "./lib/styles.module.css";
import UploadWindow from "./elements/UploadWindow";
import AddImageAPI from "../../../api/actions/AddImage";
import MainSlice from "../../../state/Reducers/MainSlice";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";



const HomePage = () => {

  const {addImage, updateTimePeriods} = MainSlice.actions
  const {images} = useAppSelector(state => state.mainReducer.data)
  const dispatch = useAppDispatch()

  const [drag, setDrag] = useState(false);

  const onDragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(true);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDrag(false);
  };
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    files.forEach(async (file) => {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await AddImageAPI(formData);
        dispatch(addImage({image: response.data.image}))
        dispatch(updateTimePeriods())
      } catch(e) {
        console.log(e)
      }
    });
    setDrag(false);
  };

  return (
    <>

      {drag ? (
        <div
          onDragStart={onDragHandler}
          onDragLeave={onDragLeaveHandler}
          onDragOver={onDragHandler}
          onDrop={onDrop}
        >
            <UploadWindow />
        </div>
      ) : undefined}
      <LargeMaxFullWidthTemplate>
        <div
          onDragStart={onDragHandler}
          onDragOver={onDragHandler}
          className={styles.container}
        >
          <Header images_total={images.length} />
          <Body />
        </div>
      </LargeMaxFullWidthTemplate>
    </>
  );
};

export default HomePage;
