import uploadImages from "../../../processes/UploadImages";
import { onDropHandler_T } from "../lib/types";


const onDropHandler: onDropHandler_T = (e, setDrag, addImage, removeImage) => {
  e.preventDefault();
  let files = [...e.dataTransfer.files];
  console.log(files)
  if(!files[0]) return
  // Переделываем в объект
  files = Object.assign({}, files)
  console.log(files)
  uploadImages(files, addImage, removeImage)
  setDrag(false);
};

export default onDropHandler;
