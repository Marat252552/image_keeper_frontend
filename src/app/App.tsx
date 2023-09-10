import { setupStore } from "../state/state";
import { Provider } from "react-redux";
import Router from "./Router";
import styles from './App.module.css'

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Router />
      </div>
    </Provider>
  );
};

export default App;
