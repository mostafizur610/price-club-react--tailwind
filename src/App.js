import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/NavBar/Pricing/Pricing';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';
import PhoneBar from './Components/PhoneBar/PhoneBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Pricing></Pricing>
      <div className='flex justify-around gap-5 py-8 mb-12'>
        <AssignmentMarks></AssignmentMarks>
        <PhoneBar></PhoneBar>
      </div>
    </div>
  );
}

export default App;
