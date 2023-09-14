import { useState } from 'react';
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

const HomePage = () => {
    const { addImage } = MainSlice.actions;
    const { images, timePeriods } = useAppSelector((state) => state.mainReducer.data);
    const dispatch = useAppDispatch();

    const [drag, setDrag] = useState(false);

    const onDragStart = ReturnOnDragHandler(true, setDrag);
    const onDragLeave = ReturnOnDragHandler(false, setDrag);

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        onDropHandler(e, setDrag, dispatch, addImage);
    };

    return (
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
                            <Body />
                        </>
                    ) : (
                        <NoImagesWindow />
                    )}
                </div>
            </LargeMaxFullWidthTemplate>
        </>
    );
};

export default HomePage;
