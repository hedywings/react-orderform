import { Provider } from 'react-redux'
import configureStore from './store';
import AppRoutes from './routes';


const { store } = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
