import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import { GlobalProvider } from './context/GlobalContext';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AppRouter />
      </Router>
    </GlobalProvider>
  );
};

export default App;
