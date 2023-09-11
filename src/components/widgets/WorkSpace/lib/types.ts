import { TimePeriod_T } from "../../../../state/Reducers/MainSlice";
import { Image_T } from "../../../shared/lib/types";

export type WorkSpace_T = ({
  allImages,
  timePeriod
}: {
  allImages: Image_T[],
  timePeriod: TimePeriod_T;
}) => JSX.Element;

export type ImagesList_T = ({
    images,
  }: {
    images: Image_T[];
  }) => JSX.Element;
