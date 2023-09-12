import { useState } from "react";
import DeleteImageAPI from "../../../api/actions/DeleteImageAPI";
import ErrorHandler from "../../../api/helpers/ErrorHandler";
import MainSlice from "../../../state/Reducers/MainSlice";
import { useAppDispatch } from "../../../state/hooks";
import Image from "../../entities/Image";
import { Image_T } from "../../shared/lib/types";
import EditWindow from "../../widgets/EditWindow";


const ImageContainer = ({ image }: { image: Image_T }) => {
  const { deleteImage: deleteImageAC } = MainSlice.actions;
  const dispatch = useAppDispatch();

  const [active, setActive] = useState(false);

  const deleteImage = async () => {
    try {
      await DeleteImageAPI(image._id);
      dispatch(deleteImageAC({ image }));
    } catch (e) {
      ErrorHandler(e);
    }
  };
  const openEditor = () => {
    setActive(true);
  };
  const openImage = () => {
    window.open(image.src);
  };
  return (
    <>
      {active && <EditWindow setActive={setActive} image={image} />}
      <Image
        openImage={openImage}
        openEditor={openEditor}
        deleteImage={deleteImage}
        image={image}
      />
    </>
  );
};

export default ImageContainer;
