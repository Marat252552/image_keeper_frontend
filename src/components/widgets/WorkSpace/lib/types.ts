import { TimePeriod_T } from "../../../../state/Reducers/MainSlice";
import { Image_T } from "../../../shared/lib/types";

export type WorkSpace_T = ({
  allImages,
  timePeriod,
  deleteImage
}: {
  allImages: Image_T[],
  timePeriod: TimePeriod_T;
  deleteImage: (image: Image_T) => void;
}) => JSX.Element;

export type ImagesList_T = ({
    images, deleteImage,
  }: {
    images: Image_T[];
    deleteImage: (image: Image_T) => void;
  }) => JSX.Element;
