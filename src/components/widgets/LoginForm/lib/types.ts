export type LoginForm_T = ({ setIsLoginForm }: {
    setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => JSX.Element

export type LoginValues_T = {
    login: string,
    password: string,
    remember: boolean
}