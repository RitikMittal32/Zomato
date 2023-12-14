import Home from './component/Home'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login/Login';


const App = () => {
  return (
    <div >
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} /> 
        </Routes>
    </div>
  );
}


export default App;
