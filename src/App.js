import './App.css';
import { Provider } from "react-redux";
import { store } from "./features/store";
import SearchScreen from './screen/SearchScreen';

function App() {
  return (
    <Provider store={store}>
     <SearchScreen />
     </Provider>
  );
}

export default App;
