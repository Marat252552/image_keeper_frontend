import { useState, useEffect } from 'react';
import LargeMaxFullWidthTemplate from '../../shared/templates/LargeMaxFullWidthTemplate';
import Header from '../../widgets/Header';
import Body from './elements/Body';
import styles from './lib/styles.module.css';
import UploadWindow from './elements/UploadWindow';
import MainSlice from '../../../state/Reducers/MainSlice';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import onDropHandler from './processes/OnDrop';
import ReturnOnDragHandler from './processes/ReturnOnDragHandler';
import NoImagesWindow from './elements/NoImagesWindow';
import GetImagesAPI from '../../../api/actions/GetImageAPI';
import ErrorHandler from '../../../api/helpers/ErrorHandler';
import Spinner from '../../ui/other/completed/Spinner';
import { Image_T } from '../../shared/lib/types';
import ImagesFetchContainer from './elements/ImagesFetchContainer';

const HomePage = () => {
    const { addImage: addImageAC, removeImage: removeImageAC } = MainSlice.actions;
    const { images, timePeriods } = useAppSelector((state) => state.mainReducer.data);
    const dispatch = useAppDispatch();

    const [drag, setDrag] = useState(false);

    const onDragStart = ReturnOnDragHandler(true, setDrag);
    const onDragLeave = ReturnOnDragHandler(false, setDrag);

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const addImage = (image: Image_T) => {
            dispatch(addImageAC({ image }));
        };
        const removeImage = (image_id: string) => {
            dispatch(removeImageAC({ image_id }));
        };
        onDropHandler(e, setDrag, addImage, removeImage);
    };

    return (
        <ImagesFetchContainer>
            <>
                {drag && (
                    <div
                        onDragStart={onDragStart}
                        onDragLeave={onDragLeave}
                        onDragOver={onDragStart}
                        onDrop={onDrop}
                    >
                        <UploadWindow />
                    </div>
                )}
                <LargeMaxFullWidthTemplate>
                    <div
                        onDragStart={onDragStart}
                        onDragOver={onDragStart}
                        className={styles.container}
                    >
                        {timePeriods[0] ? (
                            <>
                                <Header images_total={images.length} />
                                <Body images={images} timePeriods={timePeriods} />
                            </>
                        ) : (
                            <NoImagesWindow />
                        )}
                    </div>
                </LargeMaxFullWidthTemplate>
            </>
        </ImagesFetchContainer>
    );
};

export default HomePage;
