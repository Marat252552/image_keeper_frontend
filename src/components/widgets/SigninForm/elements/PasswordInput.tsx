import FilledInput from '../../../ui/other/templates/FilledInput';
import { BasicInput_T } from '../lib/types';
import StarText from '../../../shared/Texts/StarText';

const PasswordInput: BasicInput_T = ({ register, errors }) => (
    <>
        <FilledInput
            type="password"
            placeholder="Пароль"
            {...register('password', {
                required: 'Введите пароль',
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы',
                },
            })}
        />
        {errors.password?.message && <StarText>{errors.password.message}</StarText>}
    </>
);

export default PasswordInput;
