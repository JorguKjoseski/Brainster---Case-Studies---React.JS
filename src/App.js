import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import { useRoutes } from 'hookrouter';
import { Provider} from './Context/CardContext';
import NotFoundPage from './components/NotFoundPage';


function App() {

  const router = useRoutes(routes);

  return (
    <div className="App">     
      <Provider >
         {router || <NotFoundPage />}
      </Provider>
    </div>
  );
}

export default App;
