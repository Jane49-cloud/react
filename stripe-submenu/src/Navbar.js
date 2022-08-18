import React from 'react'
import logo from './images/logo.svg'
import { Fa500Px, FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
const{openSidebar, closeSubmenu, openSubmenu} = useGlobalContext()
const displaySubmenu =(e)=>{
  
  openSubmenu()
 }
  return <nav className="nav">
    <div className="nav-center">
      <div className="nav-header">
<img src={logo} className='nav-logo' alt="logo" />
<button className='btn toggle-btn' onClick={openSidebar}><FaBars></FaBars></button>
      </div>
      <ul className="nav-links">
      <li><button className='link-btn' onMouseOver={displaySubmenu}>Products</button></li>  
        <li><button className='link-btn'  onMouseOver={displaySubmenu}>developers</button></li>
        <li><button className='link-btn'  onMouseOver={displaySubmenu}>company</button></li>  
       
      </ul>
      <button className='btn signin-btn' >Signin</button>
    </div>
  </nav> 
}

export default Navbar
