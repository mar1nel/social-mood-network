import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">

        <h1 style={{
            textAlign: "center",
            marginTop: "100px",
        }}>Authssssssssssssss</h1>

        <Routes>
        <Route path="/" element={<h2>Home</h2>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>

    </div>
  );
}

export default App;
