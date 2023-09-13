import FilledInput from '../../../ui/other/templates/FilledInput';
import { BasicInput_T } from '../lib/types';
import StarText from '../../../shared/Texts/StarText';

const RepeatPasswordInput: BasicInput_T = ({ register, errors }) => (
    <>
        <FilledInput
            type="password"
            placeholder="Пароль"
            {...register('password2', {
                required: 'Подтвердите пароль',
                validate: (value, formValues) => {
                    if (value !== formValues.password) {
                        return 'Пароли не совпадают';
                    }
                },
            })}
        />
        {errors.password2?.message && <StarText>{errors.password2.message}</StarText>}
    </>
);

export default RepeatPasswordInput;
