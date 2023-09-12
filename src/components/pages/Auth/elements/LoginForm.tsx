import { LoginOutlined } from '@ant-design/icons'
import IconFilledButton from '../../../ui/buttons/templates/IconFilledButton'
import FilledInput from '../../../ui/other/templates/FilledInput'
import styles from './../lib/styles.module.css'
import StarText from '../../../shared/Texts/StarText'
import { useForm } from 'react-hook-form'
import CustomCheckbox from './CustomCheckbox'
import { LoginValues_T } from '../lib/types'
import { useEffect, useState } from 'react'
import loginAPI from '../../../../api/actions/LoginAPI'
import MainSlice from '../../../../state/Reducers/MainSlice'
import { useAppDispatch } from '../../../../state/hooks'
import Spinner from '../../../ui/other/completed/Spinner'
import { useNavigate } from 'react-router-dom'
import ErrorHandler from '../../../../api/helpers/ErrorHandler'



const LoginForm = ({ setIsLoginForm }: { setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const { register, formState: { errors }, handleSubmit} = useForm<LoginValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true
        }
    })

    const {setToken} = MainSlice.actions
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const onSubmit = async (values: LoginValues_T) => {
        setLoading(true)
        try {
            const {data} = await loginAPI(values)
            const {accessToken} = data
            dispatch(setToken({accessToken}))
            localStorage.setItem('accessToken', accessToken)
            navigate('/home')
        } catch(e: unknown) {
            ErrorHandler(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log(errors.login)
    }, [errors.login])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                <StarText>
                    Вход
                </StarText>

                <FilledInput
                    placeholder='Логин'
                    {...register('login', {
                        required: 'Введите логин',
                        maxLength: 20,
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        },
                    })}
                />
                {errors.login?.message && <StarText>{errors.login.message}</StarText>}

                <FilledInput
                    {...register('password', {
                        required: 'Введите пароль',
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        }
                    })}
                    placeholder='Пароль'
                    type='password'
                />

                {errors.password?.message && <StarText>{errors.password.message}</StarText>}

                <CustomCheckbox
                    {...register('remember')}
                />


                <div onClick={() => { setIsLoginForm(false) }}>
                    <StarText >
                        Впервые здесь? Создать аккаунт
                    </StarText>
                </div>

                <IconFilledButton
                    IconComponent={loading? <Spinner /> : <LoginOutlined />}
                />

            </form>
        </>
    )
}

export default LoginForm