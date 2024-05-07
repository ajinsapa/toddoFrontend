import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Pages/Landing';
import Login from './Components/Pages/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route  path="/login" element={<Login/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
