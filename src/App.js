import {Routes, Route} from "react-router-dom";
import Signin from "./components/login/signin";
import SignUp from "./components/login/signup";
import HomePage from "./pages/homepage";
import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">

        {/*LAST TEST*/}

      <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
      </Routes>

    </div>
  );
}

export default App;
