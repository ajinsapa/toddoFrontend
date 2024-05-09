import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Pages/Landing';
import Auth from './Components/Pages/Auth';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import ViewProjects from './Components/Pages/ViewProjects';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route  path="/Auth" element={ <Auth></Auth> } ></Route>
        <Route  path="/home" element={ <Home></Home> } ></Route>
        <Route  path="/project" element={ <Projects></Projects> } ></Route>
        <Route  path="/view" element={ <ViewProjects></ViewProjects> } ></Route>

      </Routes>
    </div>
  );
}

export default App;
