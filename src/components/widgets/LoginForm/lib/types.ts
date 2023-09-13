import { FieldErrors, UseFormRegister } from "react-hook-form";

export type LoginForm_T = ({ setIsLoginForm }: {
    setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element

export type LoginValues_T = {
    login: string,
    password: string,
    remember: boolean
}

export type LoginFormInput_T = ({ register, errors }: {
    register: UseFormRegister<LoginValues_T>;
    errors: FieldErrors<LoginValues_T>;
}) => JSX.Element