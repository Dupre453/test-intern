import React from 'react';
import {Route, Routes} from "react-router";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import StaffInfo from "./pages/Staff-info";
import './styles/app.scss'

function App() {
    return (
      <div>
          <Routes>
              <Route path='/' element={<Registration/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/home/:id' element={<StaffInfo/>}/>
          </Routes>
      </div>
  );
}

export default App;
