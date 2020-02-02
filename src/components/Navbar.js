import React from 'react';
import {  Link, NavLink, withRouter } from 'react-router-dom'
// link is helping us avoiding the use of a tag cause it reloads every time.
// thats why we use link instead of a tag but if we inspect it on the console you gonna find a tag only.

// but if we give NavLink inside of Link we still gonna have A tag on console.
// but its gonna have class active on console which we can use for designing.


const Navbar = (props) => {
    //setTimeout(() => {
      //  props.history.push('/about')
    //}, 2000);
 return (
     <nav className="nav-wrapper red darken-3">
         <div className="container">
             <a className="brand-logo">Poke's Time</a>
             <ul className="right">
                 <li><NavLink to="/">Home</NavLink></li>
                 <li><NavLink to="/about">About</NavLink></li>
                 <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
         </div>
     </nav>
 )
}

export default withRouter(Navbar);