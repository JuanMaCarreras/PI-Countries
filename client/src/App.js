import './App.css';
import { Route } from 'react-router-dom'
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form'
import CardDetail from './components/CardDetail/CardDetail';



function App() {
  return (
    <div className="App">

      <Route exact path={'/'} component={Landing} />
      <Route component={NavBar} />
      <Route path={'/home'} component={Home} />
      <Route path={'/card/detail/:id'} component={CardDetail} />
      <Route path={'/home/create'} component={Form} />

    </div>
  );
}

export default App;
