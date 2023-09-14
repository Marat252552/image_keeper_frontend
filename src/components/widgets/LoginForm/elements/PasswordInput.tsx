
import StarText from "../../../shared/Texts/StarText";
import FilledInput from "../../../ui/other/templates/FilledInput";
import { LoginFormInput_T } from "../lib/types";

const PasswordInput: LoginFormInput_T = ({errors, register}) => (
    <>
        <FilledInput
            {...register('password', {
                required: 'Введите пароль',
                pattern: {
                    value: /^[a-z0-9]+$/i,
                    message: 'Допустимы только латинские символы',
                },
            })}
            placeholder="Пароль"
            type="password"
        />

        {errors.password?.message && <StarText>{errors.password.message}</StarText>}
    </>
);

export default PasswordInput
