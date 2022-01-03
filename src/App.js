import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Register></Register>
      <Login></Login>
      
    </div>
  );
}

export default App;
