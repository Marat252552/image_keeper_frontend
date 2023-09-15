import {useEffect, useState} from 'react'
import GetImagesAPI from '../../../../api/actions/GetImageAPI';
import { useAppDispatch } from '../../../../state/hooks';
import MainSlice from '../../../../state/Reducers/MainSlice';
import ErrorHandler from '../../../../api/helpers/ErrorHandler';
import Spinner from '../../../ui/other/completed/Spinner';


const ImagesFetchContainer = ({children}: {children: JSX.Element}) => {

    const [loading, setLoading] = useState(false)

    const dispatch = useAppDispatch()
    const {setImages} = MainSlice.actions

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { images },
                } = await GetImagesAPI();
                dispatch(setImages({ images }));
            } catch (e) {
                ErrorHandler(e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    if(loading) return <Spinner />
    return children
}

export default ImagesFetchContainer