import { FormOutlined } from '@ant-design/icons';
import IconFilledButton from '../../ui/buttons/templates/IconFilledButton';
import styles from './lib/styles.module.css';
import StarText from '../../shared/Texts/StarText';
import { useForm } from 'react-hook-form';
import { SigninForm_T, SigninValues_T } from './lib/types';
import signinAPI from '../../../api/actions/signinAPI';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../state/hooks';
import MainSlice from '../../../state/Reducers/MainSlice';
import { useState } from 'react';
import Spinner from '../../ui/other/completed/Spinner';
import ErrorHandler from '../../../api/helpers/ErrorHandler';
import LoginInput from './elements/LoginInput';
import PasswordInput from './elements/PasswordInput';
import RepeatPasswordInput from './elements/RepeatPasswordInput';
import ToSigninButton from './elements/ToSigninButton';

const SigninForm: SigninForm_T = ({ setIsLoginForm }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SigninValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true,
        },
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { setIsLogged } = MainSlice.actions;

    const onSubmit = async ({ login, password, remember }: SigninValues_T) => {
        setLoading(true);
        try {
            const response = await signinAPI({ login, password, remember });
            if (response.status === 201) {
                navigate('/home');
                const { accessToken } = response.data;
                localStorage.setItem('accessToken', accessToken);
                dispatch(setIsLogged(true));
            }
        } catch (e: unknown) {
            ErrorHandler(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <StarText>Регистрация</StarText>

                <LoginInput register={register} errors={errors} />

                <PasswordInput register={register} errors={errors} />

                <RepeatPasswordInput register={register} errors={errors} />

                <ToSigninButton setIsLoginForm={setIsLoginForm}/>

                <IconFilledButton IconComponent={loading ? <Spinner /> : <FormOutlined />} />
            </form>
        </>
    );
};

export default SigninForm;
