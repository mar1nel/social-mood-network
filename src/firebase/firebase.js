import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "./init";


const auth = getAuth(app);

/*
* createshit method from firebase used to create new user
* using mail and passw
* @param {string} mail and pass
* returns
* email var takes user mail adress from mail input
* pass -> users passw from input
*  */

export async function createNewUser(email, password) {

    //adaugam si o validare
    if (!email) throw new Error("email is empty");
    if (!password) throw new Error("password is empty");
    const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
    );

    return userCredentials; //dupa success login returns mail, useerid, token etc

}

/*
* verificam daca userul este in firebase pentru login
* login existing user
* */

export async function loginUser(email, password){
    //validation
    if (!email) throw new Error("email is empty");
    if (!password) throw new Error("password is empty");

    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
}