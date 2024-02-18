import React, { useState } from "react";
import { database } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import backgroundImage from './images/auguras-pipiras-oTkAX3MAerc-unsplash.jpg';

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = ()=>{
    history("/reset");
  }
  return (

    <div className="flex items-center justify-center h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
    }}
    >
      <div className="">
        <div className="mb-8 flex justify-between items-center">
          <div
            className={`cursor-pointer py-2 ${
              !login ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setLogin(false)}
          >
            Sign Up
          </div>
          <div
            className={`cursor-pointer py-2 ${
              login ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setLogin(true)}
          >
            Sign In
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-4">
          {login ? "Sign In" : "Sign Up"}
        </h1>
        <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border rounded"
          />
          {!login && (
            <p
              className="text-blue-500 cursor-pointer"
              onClick={handleReset}
            >
              Forgot Password?
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            {login ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default RegisterAndLogin;