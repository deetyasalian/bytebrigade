import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

import "../style/style.scss"
import logo from"../image/uplift.png";
import {Link} from 'react-router-dom'
// import { AuthContextProvider } from '../context/authContext';
const Navbar = () => {
  const {currentUser,logout} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
      <div className="logfo">
        <img src={logo} alt=""/>
      </div>
     
      <div className="links">
        
        <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
        <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
        <Link className="link" to="/?cat=cinema"><h6>REVIEW</h6></Link>
        <Link className="link" to="/?cat=cinema"><h6>CHAT</h6></Link>
        <span>{currentUser?.username}</span>
      &nbsp;
        
        {currentUser ? <span onClick={logout}>Logout</span>:<Link className='link' to="/login">Logout</Link>}
        
       
        <button><b>DONATE NOW</b></button>
       <span className="write">
        <Link className="Link" to="/write">write</Link>
      </span>
      </div>

      </div>
      </div>
   
 
  )
}

export default Navbar
