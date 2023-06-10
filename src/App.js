import './App.css';
import {Routes, Route} from "react-router-dom";
import Signin from "./components/login/signin";
import SignUp from "./components/login/signup";

function App() {
  return (
    <div className="App">

        {/*LAST TEST*/}

        <Routes>
        <Route path="/" element={<h2>Home</h2>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
