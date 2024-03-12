import './App.css';
import Navbar from './Components/Navbar';
import Pleaselogin from './Components/Pleaselogin';

function App() {
  return (

    <div>
      <Navbar/>
      <div class="dup"></div>
      <img class="sale-img1" src={require('./image/sale.png')}></img>
      <img class="joinimg" src={require('./image/forwomen.jpg')}></img>
      <img class="joinimg" src={require('./image/formen.jpg')}></img>
      <h1>hello</h1>
      <Pleaselogin/>

    </div>
  );
}

export default App;
