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
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/login">
          <Pleaselogin />
        </Route>
      </Switch>
    </Router>

    // <div>
    //   <Navbar/>
    //   <div class="dup"></div>
    //   <img class="sale-img1" src={require('./image/sale.png')}></img>
    //   <img class="joinimg" src={require('./image/forwomen.jpg')}></img>
    //   <img class="joinimg" src={require('./image/formen.jpg')}></img>
    //   <Pleaselogin/>
    // </div>
  );
}

export default App;