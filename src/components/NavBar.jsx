import React from 'react';


const Navbar = () => {
  return (
    <div className='bg-blue-500 px-8 py-6 h-24'>
        <ul className='flex justify-end'>
            <li>
                <a href="./login" className='text-white hover:bg-blue-600 px-3 py-1 rounded'>Signup</a>
                <a href="" className='text-white hover:bg-blue-600 px-3 py-1 rounded'>Logout</a>
                <Themes />
            </li>
        </ul>
    </div>
    
  )
}

export default Navbar;