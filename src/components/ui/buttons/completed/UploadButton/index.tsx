import styles from './lib/styles.module.css';
import upload_image from './../../../../../assets/upload.svg';
import { useAppDispatch } from '../../../../../state/hooks';
import MainSlice from '../../../../../state/Reducers/MainSlice';
import GrayButtonTemplate from '../../../../shared/templates/GrayButtonTemplate';
import { useState } from 'react';
import { Image_T } from '../../../../shared/lib/types';
import uploadImages from '../../../../processes/UploadImages';


const UploadButton = () => {
    const dispatch = useAppDispatch();
    const { addImage: addImageAC, removeImage: removeImageAC } = MainSlice.actions;

    const [loading, setLoading] = useState(false);

    const addImage = (image: Image_T) => {
        dispatch(addImageAC({image}))
    }
    const removeImage = (image_id: string) => {
        dispatch(removeImageAC({image_id}))
    }

    const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        uploadImages(files, addImage, removeImage, setLoading)
        e.target.files = null;
    };

    return (
        <label className={styles.file_upload}>
            <GrayButtonTemplate
                icon={<img draggable="false" src={upload_image} />}
                text="Upload Image"
                loading={loading}
                children={<input accept="image/*" multiple onChange={uploadFiles} type="file" />}
            />
        </label>
    );
};

export default UploadButton;
