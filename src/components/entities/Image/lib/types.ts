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

export type EditWindow_T = ({
  image,
  setActive,
}: {
  image: Image_T;
  setActive: (value: boolean) => void;
}) => JSX.Element;
