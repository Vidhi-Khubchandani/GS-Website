import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/home'
import Contact from '../../pages/contact'
import HouseCleaner from '../../pages/services/house-cleaner'
import Gardner from '../../pages/services/gardner'
import Cook from '../../pages/services/cook'
import Login from '../../Components/App/User/Login'
import Register from '../../Components/App/User/Register'
function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route  exact path="/services/house-cleaner" element={< HouseCleaner/>} />
          <Route  exact path="/services/cook" element={<Cook />} />
          <Route  exact path="/services/gardner" element={<Gardner />} />
          <Route  exact path="/login" element={<Login />} />
          <Route  exact path="/register" element={<Register />} />
          <Route  exact path="/contact" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;