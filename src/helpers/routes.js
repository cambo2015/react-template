import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard';
import Home from '../Pages/Home';
import Payment from '../Pages/Payment';
import React from 'react';
import Signin from '../Pages/Signin';
import Signup from '../Pages/Signup';

//location,page,name
const routes = [
  ["/",<Home/>,"Home"],
  ["/about",<About/>,"About"],
  ["/dashboard",<Dashboard/>,"Dashboard"],
  ["/signin",<Signin/>,"Sign in"],
  ["/signup",<Signup/>,"Sign up"],
  ["/checkout",<Payment/>,"Checkout"]
]

export default routes