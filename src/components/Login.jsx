import React, { useState } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import {auth} from './firebase-config'
import backgroundImage from './images/auguras-pipiras-oTkAX3MAerc-unsplash.jpg';



async function Login () {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {};
  try{
  const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  console.log(user)
  } catch (error) {
    console.log(error.message);
  }

  const login = async () => {try{
    const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(user)
    } catch (error) {
      console.log(error.message);
    }

  };

  const Logout = async () => {ut
    await signOut(auth)
  };

  return (
    <div
      className="flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <form className="bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Register User</h2>
        <div className="mb-4">
          <label htmlFor="Email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="Email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your Email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }

            }
          />
        </div>
        <div className="mb-4">
          <h3>Create User</h3>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }

            }
          />
          <button onClick={register}>Create User</button>
        </div>
        <div className="mb-4">
          <h4>Log In</h4>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }

            }
            />
            <input
            type="email"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }

            }

          />
        </div>
        <button onClick={login}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
        <h5>User Logged In</h5>
        {user?.email}

        <button onClick={Logout}>Sign Out</button>

      </form>
    </div>
  );
};

export default Login;