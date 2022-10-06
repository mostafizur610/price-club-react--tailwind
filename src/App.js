import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/NavBar/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='font-bold text-4xl'>This is big big header</h1>

      <Pricing></Pricing>
    </div>
  );
}

export default App;
