import './App.css';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Package from './Component/Package/Package';
import Team from './Component/Team/Team';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from './Component/About/About';
import { Navbar } from 'react-bootstrap-v5';


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Navbar>
    <Routes>
      <Route path="/" element={<Home />}/>
      
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="package" element={<Package />} /> 
          <Route path="home" element={<Home />}/>
          <Route path="team" element={<Team />}/>
          <Route path="about" element={<About />}/>

    </Routes>
  </Navbar>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
