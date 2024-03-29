import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Pleaselogin from './Components/Pleaselogin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Pleaselogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;