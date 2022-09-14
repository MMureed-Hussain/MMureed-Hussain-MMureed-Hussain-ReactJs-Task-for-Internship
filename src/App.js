import { Routes,Route,Link} from 'react-router-dom';
import './App.css';
import "./index.css"
import About from './pages/About';
import Articla from './pages/Articla';
import Articla1 from './pages/Articla1';
import Articla2 from './pages/Articla2';
import Articla3 from './pages/Articla3';
import Home from './pages/Home';
import SliceFun from './SliceFun';

function App() {
  
  return (
    <>
     <h1>React Routing Example</h1>
     <div className=" nav " >
        <li className="nav-link btn btn-dark m-3"><Link className='text-decoration-none text-light' to="/">Home</Link></li>
        <li className="nav-link btn btn-dark m-3"><Link className='text-decoration-none text-light' to="/about">About</Link></li>
        <li className="nav-link btn btn-dark m-3"><Link className='text-decoration-none text-light' to="/articla" >Articla</Link></li>
     </div>
     <Routes>
        <Route exact path="/" element={ <Home/> } ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/articla" element={ <Articla/>}>
            <Route path="2" element={ <Articla2/>} ></Route>
            <Route path="1" element={ <Articla1/>} ></Route>
            <Route path="3" element={ <Articla3/>} ></Route>

          <Route path="*" element={ <h1>Page Not Found</h1>} ></Route>
        </Route>
     </Routes>
     <SliceFun/>
     {/* <Home />
     <About />
     <Articla /> */}
    </>
  );
}

export default App;
