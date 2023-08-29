 import React from "react";
   import { Link } from "react-router-dom";
 

 const  Navbar = () =>{
    return (
      <div>
        <div>
      <nav>
           <Link  to = "/" class="split">Ashton Jantz</Link>
           <Link to = "/contact">Contact</Link>
           <Link to = "/about">About</Link>
           <Link to = "/projects">Projects</Link>
      </nav>
        </div>
      </div>
    );
  }
  
  export default Navbar;