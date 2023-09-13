import { FieldErrors, UseFormRegister } from "react-hook-form";

export type SigninValues_T = {
    login: string,
    password: string,
    password2: string,
    remember: boolean
}

export type SigninForm_T = ({ setIsLoginForm }: {
    setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element

export type BasicInput_T = ({ register, errors }: {
    register: UseFormRegister<SigninValues_T>;
    errors: FieldErrors<SigninValues_T>;
}) => JSX.Element