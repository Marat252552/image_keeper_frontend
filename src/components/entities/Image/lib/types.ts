import { Image_T } from "../../../shared/lib/types";

export type MakeImage_T = ({
  image,
  deleteImage,
  editImage,
}: {
  image: Image_T;
  deleteImage: (image: Image_T) => void;
  editImage: (image: Image_T, label: string) => void;
}) => JSX.Element;
