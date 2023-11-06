import React from 'react'
import homeIcon from "../../images/home-icon.png";
import "./navbar.css";
const Navbar = ()=>{
    return(
        <div className='navbar'>
            <div className='nav-item'>
                <img src={homeIcon} alt=''></img>
                <div>Home</div>
            </div>
            <div className='nav-item'>
                <img src={homeIcon} alt=''></img>
                <div>Home</div>
            </div>
            <div className='nav-item'>
                <img src={homeIcon} alt=''></img>
                <div>Home</div>
            </div>
            <div className='nav-item'>
                <img src={homeIcon} alt=''></img>
                <div>Home</div>
            </div>
        </div>
    )
}

export default Navbar;