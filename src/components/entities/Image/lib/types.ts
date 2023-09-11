import { Image_T } from "../../../shared/lib/types";

export type MakeImage_T = ({
  image,
  deleteImage,
  openEditor,
  openImage
}: {
  image: Image_T;
  deleteImage: () => void;
  openImage: () => void
  openEditor: () => void
}) => JSX.Element;
