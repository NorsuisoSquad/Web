import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/Shared/Routes';

const App = () => {
  return (
    <Router>
    <Layout>
      <div className="App">
        <Routes />
      </div>
    </Layout>
    </Router>
  );
}

export default App;
