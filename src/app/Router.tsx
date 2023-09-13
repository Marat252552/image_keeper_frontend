import { HashRouter, Routes, Route } from "react-router-dom";
import AuthPage from "../components/pages/Auth";
import HomePage from "../components/pages/Home";
import { useAppSelector } from "../state/hooks";
import ReturnDefaultPage from "./helpers/ReturnDefaultPage";

const Router = () => {
  const { token } = useAppSelector((state) => state.mainReducer);
  const defaultPage = ReturnDefaultPage(token)
  return (
    <HashRouter>
      <Routes>
        {token && <Route path="/home" element={<HomePage />} />}
        {!token && <Route path="/login" element={<AuthPage />} />}
        
        <Route path="*" element={defaultPage} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
