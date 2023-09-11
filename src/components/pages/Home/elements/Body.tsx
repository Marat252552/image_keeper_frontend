import { useEffect } from "react";
import GetImagesAPI from "../../../../api/actions/GetImageAPI";
import WorkSpace from "../../../widgets/WorkSpace";
import { useAppDispatch, useAppSelector } from "../../../../state/hooks";
import MainSlice from "../../../../state/Reducers/MainSlice";
import styles from "./../lib/styles.module.css";
import NoImagesWindow from "./NoImagesWindow";
import ErrorHandler from "../../../../api/helpers/ErrorHandler";


const Body = () => {
  const { data } = useAppSelector((state) => state.mainReducer);
  const {
    setImages,
  } = MainSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      try {
        const {data: {images}} = await GetImagesAPI();
        dispatch(setImages({ images }));
      } catch (e) {
        ErrorHandler(e)
      }
    })()
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
          />
        );
      })}
    </div>
  );
};

export default Body;
