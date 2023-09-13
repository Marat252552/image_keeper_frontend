import { BasicInput_T } from '../lib/types';
import FilledInput from '../../../ui/other/templates/FilledInput';
import StarText from '../../../shared/Texts/StarText';

const LoginInput: BasicInput_T = ({ register, errors }) => (
    <>
        <FilledInput
            placeholder="Логин"
            {...register('login', {
                required: 'Введите логин',
                maxLength: 20,
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы',
                },
            })}
        />
        {errors.login?.message && <StarText>{errors.login.message}</StarText>}
    </>
);

export default LoginInput;
