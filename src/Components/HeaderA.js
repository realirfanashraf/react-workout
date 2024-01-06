import React from "react";
import './header.css';

function Header(props) {

  const {
    onMenuSelect
  } = props
  return (
    <nav className='app-header'>
      <span className='header-title'>Demo</span>
      <ul className='menu-items'>
        <li onClick={()=>{
          onMenuSelect('Usage')
        }}>Usage</li>
        <li onClick={()=>{
          onMenuSelect('Home')
        }}>Home</li>
        <li onClick={()=>{
          onMenuSelect('Profile')
        }}>Profile</li>
      </ul>
    </nav>
  );
}

export default Header;
