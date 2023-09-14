import HomePage from '../../components/pages/Home';
import AuthPage from '../../components/pages/Auth';

const ReturnDefaultPage = (isLogged: boolean) => {
    if (isLogged) return <HomePage />;
    return <AuthPage />;
};

export default ReturnDefaultPage;
