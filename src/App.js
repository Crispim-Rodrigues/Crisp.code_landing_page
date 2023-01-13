import './App.css';
import Home from './conponents/Home.js';
import Description from './conponents/Description.js';
import Person from './conponents/Person.js';
import Coments from './conponents/Coments.js';
import Form from './conponents/Form.js';
import Footer from './conponents/Footer.js';
function App() {
  return (
    <div className="App">
      <Home/>
      <Description/>
      <Person/>
      <Coments/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
