import { useEffect } from 'react';
import loggedAPI from '../../api/actions/loggedAPI';
import MainSlice from '../../state/Reducers/MainSlice';
import { useAppDispatch } from '../../state/hooks';

const LoggedChecker = ({ children }: { children: JSX.Element }) => {
    const dispatch = useAppDispatch();
    const { setToken } = MainSlice.actions;

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { accessToken },
                } = await loggedAPI();
                dispatch(setToken({ accessToken }));
            } catch (e) {
                console.log(e);
            }
        })();
    }, []);

    return children;
};

export default LoggedChecker;
