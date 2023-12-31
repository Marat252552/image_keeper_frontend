import { useEffect, useState } from 'react';
import loggedAPI from '../../api/actions/loggedAPI';
import MainSlice from '../../state/Reducers/MainSlice';
import { useAppDispatch } from '../../state/hooks';
import ErrorHandler from '../../api/helpers/ErrorHandler';
import Spinner from '../../components/ui/other/completed/Spinner';


const LoggedChecker = ({ children }: { children: JSX.Element }) => {
    const dispatch = useAppDispatch();
    const { setIsLogged } = MainSlice.actions;

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const {
                    data: { accessToken },
                } = await loggedAPI();
                localStorage.setItem('accessToken', accessToken);
                dispatch(setIsLogged(true));
            } catch (e) {
                ErrorHandler(e)
            } finally {
                setLoading(false)
            }
        })();
    }, []);
    if(loading) return <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <Spinner />
        <span style={{fontSize: '12px'}}>Ожидание может занимать до 10 минут, т.к. для web сервис запущен на бесплатном хостинге</span>
        
        </div>
    return children;
};

export default LoggedChecker;
