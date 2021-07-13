import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:id" component={Details} />
    </Switch>
  );
}

export default App;
