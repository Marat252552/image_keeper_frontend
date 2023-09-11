import { FormOutlined } from '@ant-design/icons'
import IconFilledButton from '../../../ui/buttons/IconFilledButton'
import FilledInput from '../../../ui/FilledInput'
import styles from './../lib/styles.module.css'
import StarText from '../../../shared/Texts/StarText'
import { useForm } from 'react-hook-form'
import { SigninForm_T, SigninValues_T } from '../lib/types'
import signinAPI from '../../../../api/actions/SigninAPI'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../state/hooks' 
import MainSlice from '../../../../state/Reducers/MainSlice'
import { useState } from 'react'
import Spinner from '../../../ui/Spinner'
import ErrorHandler from '../../../../api/helpers/ErrorHandler'


const SigninForm: SigninForm_T = ({ setIsLoginForm }) => {

    const { register, handleSubmit, formState: { errors } } = useForm<SigninValues_T>({
        mode: 'onChange',
        defaultValues: {
            remember: true
        }
    })

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    const { setToken } = MainSlice.actions

    const onSubmit = async ({ login, password, remember }: SigninValues_T) => {
        setLoading(true)
        try {
            const response = await signinAPI({ login, password, remember })
            if (response.status === 201) {
                navigate('/home')
                const { accessToken } = response.data
                localStorage.setItem('access_token', accessToken)
                dispatch(setToken({accessToken}))
            }
        } catch (e: unknown) {
            ErrorHandler(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>

                <StarText>
                    Регистрация
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
                    type='password'
                    placeholder='Пароль'
                    {...register('password', {
                        required: 'Введите пароль',
                        pattern: {
                            value: /^[a-z0-9]+$/i,
                            message: 'Допустимы только латинские символы'
                        }
                    })}
                />

                {errors.password?.message && <StarText>{errors.password.message}</StarText>}

                <FilledInput
                    type='password'
                    placeholder='Пароль'
                    {...register('password2', {
                        required: 'Подтвердите пароль',
                        validate: (value, formValues) => {
                            if (value !== formValues.password) {
                                return 'Пароли не совпадают'
                            }
                        }
                    })}
                />

                {errors.password2?.message && <StarText>{errors.password2.message}</StarText>}

                <div onClick={() => { setIsLoginForm(true) }}>
                    <StarText >
                        Уже есть аккаунт? Войти
                    </StarText>
                </div>

                <IconFilledButton
                    IconComponent={loading ? <Spinner /> : <FormOutlined />}
                />

            </form>
        </>
    )
}

export default SigninForm