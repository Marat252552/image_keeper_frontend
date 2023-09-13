import { setupStore } from "../state/state";
import { Provider } from "react-redux";
import Router from "./Router";
import styles from "./App.module.css";
import LoggedChecker from "./processes/LoggedChecker";

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <LoggedChecker>
          <Router />
        </LoggedChecker>
      </div>
    </Provider>
  );
};

export default App;
