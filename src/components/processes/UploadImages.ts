import { v4 } from "uuid";
import { Image_T } from "../shared/lib/types";
import { message } from "antd";
import ErrorHandler from "../../api/helpers/ErrorHandler";
import AddImageAPI from "../../api/actions/AddImageAPI";

type uploadImages_T = (files: FileList | File[] | null, addImage: (image: Image_T) => void, removeImage: (image_id: string) => void, setLoading?: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>

// Функция загружает объект с файлами. Используется при загрузке через кнопку и через drag n drop
const uploadImages: uploadImages_T = async (files, addImage, removeImage, setLoading?) => {
    if(!files) return
    for (const key in files) {
        const file = files[key]
        // Проверка, является ли файлом элемент объекта
        if(!(file instanceof File)) return
        const initial_image_id = v4();
        if(setLoading) {setLoading(true)}
        try {
            const formData = new FormData();
            formData.append('file', file);
            const preloadedImage: Image_T = {
                _id: initial_image_id,
                createdAt: new Date().toString(),
                label: file.name,
                src: URL.createObjectURL(file),
                loading: true,
            };
            addImage(preloadedImage)
            const {
                data: { image },
            } = await AddImageAPI(formData);
            addImage(image)
            message.info(`${files[0].name} is uploaded`);
        } catch (e) {
            ErrorHandler(e);
            message.error(`${files[0].name} upload failed`);
        } finally {
            if(setLoading) {setLoading(false)}
            removeImage(initial_image_id)
        }
    }
};

export default uploadImages