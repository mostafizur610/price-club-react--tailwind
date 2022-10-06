import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Pricing from './Components/NavBar/Pricing/Pricing';
import AssignmentMarks from './Components/AssignmentMarks/AssignmentMarks';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className='font-bold text-4xl'>This is big big header</h1>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
