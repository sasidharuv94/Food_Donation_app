
import './App.css';

import Pics from './component/Pics';
import Donar from './component/Donar';
import Login from './component/Login';
import Register from './component/Register';
import Register1 from './component/Register1';
import Login1 from './component/Login1';
import Ngo from './component/Ngo';
import Donarstatus from './Donarstatus';
import Ngostatus from './Ngostatus';
import {  BrowserRouter,
  Routes,
 Route,

 } from "react-router-dom";
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">

      <BrowserRouter>

      <Navbar/>


<Routes>


  <Route index element={<Pics></Pics>}/>
 <Route  exact path="/donar" element={<Donar/>}/> 
 <Route exact path="/Ngo" element={<Ngo/>}/>
  <Route exact path='/donar/Login' element={<Login></Login>}/>
  <Route exact path='/ngo/Register1' element={<Register1></Register1>}/>
  <Route exact path='/ngo/Login1' element={<Login1></Login1>}/>
 <Route  exact path="/donar/Register" element={<Register/>}/>
 <Route exact path='/donar/Login/donarstatus' element={<Donarstatus />}/>
 <Route exact path='/ngo/Login1/ngostatus' element={<Ngostatus/>}/>
 </Routes>

    </BrowserRouter>

     
     
    </div>
  );
}

export default App;
