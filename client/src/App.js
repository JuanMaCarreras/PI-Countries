import './App.css';
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import CardDetail from './components/CardDetail/CardDetail';

function App() {


  return (
    <div className="App">

      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/home'} component={Home} />
      <Route exact path={'/countries/:id'} component={CardDetail} />
      <Route exact path={'/home/create'} component={Form} />

    </div>
  );
}

export default App;
