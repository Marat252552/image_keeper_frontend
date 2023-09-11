import { Image_T } from "../../../shared/lib/types";

export type MakeImage_T = ({
  image,
  deleteImage,
}: {
  image: Image_T;
  deleteImage: (image: Image_T) => void;
}) => JSX.Element;
