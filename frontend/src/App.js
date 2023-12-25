
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import SignUp from './components/SIgnUp';
import "react-toastify/dist/ReactToastify.css";
import Createpost from './components/Createpost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/createpost' element={<Createpost/>}/>
      </Routes>
      <ToastContainer theme='dark'/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
