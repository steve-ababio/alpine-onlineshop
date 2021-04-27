import React, { useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import './navbar.css';

const Navbar = ()=>
{
    const [sidebaropen,setsidebaropen] = useState(false);
    const opensidebar = ()=>
    {
        setsidebaropen(true);
    }   
    const closesidebar = ()=>
    {
        setsidebaropen(false)
    }
    return(
    <>
        <div class="nav-bar-wrapper">
            <header className ="nav-header">
                <h1>Elixir shop</h1>
            </header>
            <div className="nav-menu-icon-wrapper" onClick={()=>{opensidebar()}}>
                <div className="nav-menu-icon"></div>
                <div className="nav-menu-icon"></div>
            </div>
            
        </div>
        <Sidebar closesidebar={closesidebar} sidebaropened = {sidebaropen}/>
    </>
    ) 
}
export default Navbar;