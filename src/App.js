import "./App.css";
import { Provider } from "react-redux";
// import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookCakeContainer />
        {/* <CakeContainer /> */}
        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
