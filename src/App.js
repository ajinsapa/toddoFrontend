import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Pages/Landing';
import Auth from './Components/Pages/Auth';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route  path="/Auth" element={ <Auth></Auth> } ></Route>
        <Route  path="/register" element={ <Auth>register={true}</Auth> } ></Route>

      </Routes>
    </div>
  );
}

export default App;
