export type LoginValues_T = {
    login: string,
    password: string,
    remember: boolean
}

export type SigninValues_T = {
    login: string,
    password: string,
    password2: string,
    remember: boolean
}

export type SigninForm_T = ({ setIsLoginForm }: {
    setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element