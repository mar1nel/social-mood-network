import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./components/login/login";
import SignUp from "./components/login/signup";

function App() {
  return (
    <div className="App">

        <h1 style={{
            textAlign: "center",
            marginTop: "100px",
        }}>Auth</h1>

        {/*LAST TEST*/}

        <Routes>
        <Route path="/" element={<h2>Home</h2>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>

    </div>
  );
}

export default App;
