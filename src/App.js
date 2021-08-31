
import './App.css';
import CaompA from './CaompA';
import CompB from './CompB';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import GameReducer from './GameReducer';
import CompC from './CompC';
function App() {
  const store = createStore(GameReducer)
  return (
    <div className="App">
      <h1>Redux-payload</h1>
      <Provider store={store}>
        <CaompA />
        <CompB />
        <CompC/>
      </Provider>

    </div>
  );
}

export default App;
