import StarText from "../../../shared/Texts/StarText";

const ToLoginFormButton = ({setIsLoginForm}: {setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>}) => (
    <div
        onClick={() => {
            setIsLoginForm(false);
        }}
    >
        <StarText>Впервые здесь? Создать аккаунт</StarText>
    </div>
);

export default ToLoginFormButton
