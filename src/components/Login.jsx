import React from 'react';

const Login = () => {
  return (
    <div className="flex items-top-left justify-center" style={{
      bacgroundImage: `url(${loginBackground})`

    }}>
      <form className="bg-white p-8 shadow-md r">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
