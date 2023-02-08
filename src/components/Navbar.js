import React from 'react'
import logo from './AIR.PA_BIG.png'
import logo1 from './logo1.png';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const Navbar = () => {
  const userState = useSelector(selectUser);
  const { user } = userState;
  return (
        <nav className="bg-amber-400 border-gray-200 px-2 sm:px-4 py-2.5 rounded " style={{backgroundColor:"rgb(255,235,59)"}}>
        <div className="container flex flex-wrap items-center mx-auto justify-between">
          <Link to ="/" className="flex items-center">
              <img src={logo} className="h-6 mr-3 sm:h-9 ml-20" alt="FlowBite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black text-[20px]">Airbus</span>
          </Link>
        <div className="hidden w-full md:block md:w-auto mr-20" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row 
              md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:dark:border-gray-700">

          <li><Link to="/" 
                 className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent 
                  font-[600] text-[15px] md:p-0 text-black " 
                  >Home</Link>
           </li>
        <li>
          <Link to="/checkout" 
          className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent font-[600] text-[15px] md:p-0 text-black"
            >Checkout</Link>
        </li>
        <li>
         <div  className="flex"><img
         src={logo1}
         alt='logo'
         width={25}
         height={25}
         className='rounded-full'
       /> 
       <span onClick={()=>firebase.auth().signOut()} className="ml-1 block py-2 pl-3 pr-4 text-blue font-[600] text-[15px] md:p-0 text-blue hover:bg-gray- 
         100 md:hover:bg-transparent md:border-0 md:hover:text-blue md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray- 
          700block py-2 pl-3 pr-4 text-blue font-[600] text-[15px] md:p-0 text-blue hover:bg-gray-100 md:hover:bg-transparent md:border-0 
          md:hover:text-blue md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 cursor-pointer">logout</span>
       </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar
