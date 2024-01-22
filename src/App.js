
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cafe from "./components/Cafe";
import Cannoli from "./components/Cannoli";
import Cereza from "./components/Cereza";
import Cheesecake from "./components/Cheesecake";
import Chocolate from "./components/Chocolate";
import Fruta from "./components/Fruta";
import Macarron from "./components/Macarron";
import Oreo from "./components/Oreo";
import Pancake from "./components/Pancake";
import Split from "./components/Split";
import Tiramisu from "./components/Tiramisu";
import Vainilla from "./components/Vainilla";
import Navegacion from './components/Navegacion';

function App() {
  return (
    <Router>
      <div className='container'>
          {/* Al colocar container, text-center, etc, estamos usando clases de Bootstrap */}
          <h1 className='text-center mt-3 mb-3'>Dessert gallery</h1>
      </div>
      <Routes>
      <Route path='/Cafe' Component={Cafe}/>
      <Route path='/Cannoli' Component={Cannoli}/>
      <Route path='/Cereza' Component={Cereza}/>
      <Route path='/Cheesecake' Component={Cheesecake}/>
      <Route path='/Chocolate' Component={Chocolate}/>
      <Route path='/Fruta' Component={Fruta}/>
      <Route path='/Macarron' Component={Macarron}/>
      <Route path='/Oreo' Component={Oreo}/>
      <Route path='/Pancake' Component={Pancake}/>
      <Route path='/Split' Component={Split}/>
      <Route path='/Tiramisu' Component={Tiramisu}/>
      <Route path='/Vainilla' Component={Vainilla}/>
      </Routes>
      <Navegacion/>
     
    </Router>
  );
}

export default App;
