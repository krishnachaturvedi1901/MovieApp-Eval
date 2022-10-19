import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App" >
      <Navbar/>
      <Home/>
      <AllRoutes/>
    </div>
  );
}

export default App;
