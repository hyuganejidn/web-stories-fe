import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Story from './pages/story/Story';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/story' component={Story} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
