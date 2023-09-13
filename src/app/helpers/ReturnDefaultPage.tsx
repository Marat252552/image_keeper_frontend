import HomePage from "../../components/pages/Home"
import AuthPage from "../../components/pages/Auth"


const ReturnDefaultPage = (token: string | undefined) => {
    if(token) {
        return <HomePage />
    } else {
        return <AuthPage />
    }
}

export default ReturnDefaultPage