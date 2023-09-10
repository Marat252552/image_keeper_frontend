import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "../components/pages/Auth";
import HomePage from "../components/pages/Home";
import { useAppSelector } from "../state/hooks";

const Router = () => {
  const { token } = useAppSelector((state) => state.mainReducer);
  return (
    <HashRouter>
      <Routes>
        {token && <Route path="/home" element={<HomePage />} />}
        <Route path="/login" element={<AuthPage />} />
        <Route path="*" element={<Navigate to='/login'/>} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
