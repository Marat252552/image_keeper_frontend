import StarText from "../../../shared/Texts/StarText";

const ToSigninButton = ({setIsLoginForm}: {setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>}) => (
    <div
        onClick={() => {
            setIsLoginForm(true);
        }}
    >
        <StarText>Уже есть аккаунт? Войти</StarText>
    </div>
);

export default ToSigninButton;
