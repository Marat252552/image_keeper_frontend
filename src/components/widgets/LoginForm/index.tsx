import { LoginOutlined } from '@ant-design/icons';
import IconFilledButton from '../../ui/buttons/templates/IconFilledButton';
import FilledInput from '../../ui/other/templates/FilledInput';
import styles from './lib/styles.module.css';
import StarText from '../../shared/Texts/StarText';
import { useForm } from 'react-hook-form';
import RememberMeCheckBox from '../../ui/other/completed/RememberMeCheckBox';
import { LoginValues_T } from './lib/types';
import { useState } from 'react';
import loginAPI from '../../../api/actions/loginAPI';
import MainSlice from '../../../state/Reducers/MainSlice';
import { useAppDispatch } from '../../../state/hooks';
import Spinner from '../../ui/other/completed/Spinner';
import { useNavigate } from 'react-router-dom';
import ErrorHandler from '../../../api/helpers/ErrorHandler';
import { LoginForm_T } from './lib/types';
import LoginInput from './elements/LoginInput';
import PasswordInput from './elements/PasswordInput';
import ToLoginFormButton from './elements/ToLoginFormButton';

const LoginForm: LoginForm_T = ({ setIsLoginForm }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true,
        },
    });

    const { setToken } = MainSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const onSubmit = async (values: LoginValues_T) => {
        setLoading(true);
        try {
            const { data } = await loginAPI(values);
            const { accessToken } = data;
            dispatch(setToken({ accessToken }));
            localStorage.setItem('accessToken', accessToken);
            navigate('/home');
        } catch (e: unknown) {
            ErrorHandler(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <StarText>Вход</StarText>

                <LoginInput register={register} errors={errors} />

                <PasswordInput errors={errors} register={register} />

                <RememberMeCheckBox {...register('remember')} />

                {/* Переход к форме входа */}
                <ToLoginFormButton setIsLoginForm={setIsLoginForm} />

                {/* Кнопка submit */}
                <IconFilledButton IconComponent={loading ? <Spinner /> : <LoginOutlined />} />
            </form>
        </>
    );
};

export default LoginForm;
