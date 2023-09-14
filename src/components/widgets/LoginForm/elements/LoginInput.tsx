import StarText from "../../../shared/Texts/StarText";
import FilledInput from "../../../ui/other/templates/FilledInput";
import { LoginFormInput_T } from "../lib/types";

const LoginInput: LoginFormInput_T = ({errors, register}) => (
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

export default LoginInput
