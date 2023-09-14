import styles from './lib/styles.module.css';
import upload_image from './../../../../../assets/upload.svg';
import AddImageAPI from '../../../../../api/actions/AddImageAPI';
import { useAppDispatch } from '../../../../../state/hooks';
import MainSlice from '../../../../../state/Reducers/MainSlice';
import GrayButtonTemplate from '../../../../shared/templates/GrayButtonTemplate';
import ErrorHandler from '../../../../../api/helpers/ErrorHandler';
import { message } from 'antd';
import { useState } from 'react';
import { Image_T } from '../../../../shared/lib/types';
import { v4 } from 'uuid';


const UploadButton = () => {
    const dispatch = useAppDispatch();
    const { addImage, removeImage } = MainSlice.actions;

    const [loading, setLoading] = useState(false);

    const uploadFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (!files?.length) return;
        for (let i = 0; i < files?.length; i++) {
            const initial_image_id = v4();
            setLoading(true);
            try {
                const file = files[i];
                const formData = new FormData();
                formData.append('file', files[i]);
                const preloadedImage: Image_T = {
                    _id: initial_image_id,
                    createdAt: new Date().toString(),
                    label: file.name,
                    src: URL.createObjectURL(file),
                    loading: true,
                };
                dispatch(addImage({ image: preloadedImage }));
                const {
                    data: { image },
                } = await AddImageAPI(formData);
                dispatch(addImage({ image }));
                message.info(`${files[0].name} is uploaded`);
            } catch (e) {
                ErrorHandler(e);
                message.error(`${files[0].name} upload failed`);
            } finally {
                setLoading(false);
                dispatch(removeImage({image_id: initial_image_id}))
            }
        }
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
