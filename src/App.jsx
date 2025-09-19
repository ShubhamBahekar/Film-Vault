import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes/routes';
import {store} from './app/store'; // if using redux

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
