import './App.css';
import Home from './conponents/Home.js';
import Description from './conponents/Description.js';
import Person from './conponents/Person.js';
import Coments from './conponents/Coments.js';
import Form from './conponents/Form.js';

function App() {
  return (
    <div className="App">
      <Home/>
      <Description/>
      <Person/>
      <Coments/>
      <Form/>
    </div>
  );
}

export default App;
