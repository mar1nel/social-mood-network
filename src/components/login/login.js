import React, {useState} from 'react'
import "./login.css";
import {createNewUser} from "../../firebase/firebase";

const Login = () => {

   const [email, setEmail] = useState(""); //will store user mail from mail input
   const [password, setPassword] = useState("");

   const loginButton = async () => {
      const user = await createNewUser(email, password);
      console.log("user: ", user);
   };

    return (
        <>

            <div className="login-page">
            <div className="login-box">
                <h2 className="heading-login-box">Login</h2>
                <form>
                    <div className="user-box">
                        <input  required autoComplete={false}
                                onChange={(e)=> (setEmail(e.target.value))}
                                //this will ge emal and store it to mail state
                                className="user-box-input"
                                type="text"/>
                            <label className="user-box-label">Username</label>
                    </div>
                    <div className="user-box">
                        <input required autoComplete={false}
                               onChange={(e)=> (setPassword(e.target.value))}
                               className="user-box-input"
                               type="password"/>
                            <label className="user-box-label">Password</label>
                    </div>
                    <a type="submit" className="login-box-button" onClick={loginButton} href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
            </div>

        </>
    )
};

export default Login;