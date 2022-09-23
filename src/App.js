import logo from './wheel.png'; 
import './App.css';
import TopNavBar from './components/NavBar';

function App() {
  return ( 
<>
<TopNavBar />
  <div className="App">
    <header className="App-header"> 
      <p className='title'> CARDANO RACERS </p> 
      <img src={logo} className="App-logo" alt="logo" /> 
      <p> Coming soon! </p> 
    </header> 
  </div> 
  </>
  ); 
  }; 

export default App;
