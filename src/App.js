import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Projects from './Pages/Projects';
import Register from './Pages/Register';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
      <Footer /> 

    </div>
  );
}

export default App;
