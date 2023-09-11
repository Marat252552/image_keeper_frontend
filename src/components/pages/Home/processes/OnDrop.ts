import AddImageAPI from "../../../../api/actions/AddImageAPI";
import ErrorHandler from "../../../../api/helpers/ErrorHandler";
import { onDrop_T } from "../lib/types";


const onDrop: onDrop_T = (e, setDrag, dispatch, addImage) => {
  e.preventDefault();
  const files = [...e.dataTransfer.files];
  files.forEach(async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await AddImageAPI(formData);
      dispatch(addImage({ image: response.data.image }));
    } catch (e) {
      ErrorHandler(e);
    }
  });
  setDrag(false);
};

export default onDrop;