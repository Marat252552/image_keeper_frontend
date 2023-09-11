import { useEffect } from "react";
import GetImagesAPI from "../../../../api/actions/GetImage";
import WorkSpace from "../../../widgets/WorkSpace";
import { useAppDispatch, useAppSelector } from "../../../../state/hooks";
import MainSlice from "../../../../state/Reducers/MainSlice";
import styles from "./../lib/styles.module.css";
import DeleteImageAPI from "../../../../api/actions/DeleteImageAPI";
import { Image_T } from "../../../shared/lib/types";
import NoImagesWindow from "./NoImagesWindow";

const Body = () => {
  const { data } = useAppSelector((state) => state.mainReducer);
  const {
    setImages,
    deleteImage: deleteImageAC,
    updateTimePeriods,
  } = MainSlice.actions;
  const dispatch = useAppDispatch();

  const deleteImage = async (image: Image_T) => {
    try {
      await DeleteImageAPI({ image_id: image._id });
      dispatch(deleteImageAC({ image }));
      dispatch(updateTimePeriods())
    } catch (e) {
      console.log(e);
    }
  };

  const editImage = async (image: Image_T) => {
    try {
      await DeleteImageAPI({ image_id: image._id });
      dispatch(deleteImageAC({ image }));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetImagesAPI();
        dispatch(setImages({ images: response.data.images }));
        dispatch(updateTimePeriods());
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.body_container}>
      {!data.timePeriods[0] && <NoImagesWindow />}
      {data.timePeriods.map((timePeriod) => {
        return (
          <WorkSpace
            key={timePeriod.date}
            allImages={data.images}
            timePeriod={timePeriod}
            deleteImage={deleteImage}
            editImage={editImage}
          />
        );
      })}
    </div>
  );
};

export default Body;
