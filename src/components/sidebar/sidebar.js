import React, { useRef } from 'react'
import './sidebar.css'
import { BiHome } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import {FiShoppingCart} from 'react-icons/fi';
import {MdFavoriteBorder} from "react-icons/md";
import { AiOutlineUser,AiOutlineUserAdd } from "react-icons/ai";

const Sidebar = ({sidebaropened,closesidebar})=>
{
    const overlayref = useRef();
    return(
        <div ref={overlayref} onClick={e=>{if(e.target === overlayref.current)closesidebar()}} className = {sidebaropened ? "overlay" : "overlay-off"}>
            <div className={sidebaropened ? "sidebar-wrapper sidebar-wrapper-opened":"sidebar-wrapper sidebar-wrapper-close"}>
                <div className="close-icon-container" onClick={()=>closesidebar()}>
                    <div className="close-icon"></div>
                    <div className="close-icon"></div>
                </div>
                <div className="sidebar-list-wrapper">
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <BiHome size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text"><span>HOME</span></div>
                        </div>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <FiShoppingBag size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text"><span>CART</span></div>
                        </div>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <FiShoppingCart size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text"><span>ORDERS</span></div>
                        </div>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <MdFavoriteBorder size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text"><span>WISHLIST</span></div>
                        </div>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <AiOutlineUser size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text">
                                <span>LOGIN</span>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-item-wrapper">
                        <div className="sidebar-item">
                            <div className="sidebar-icon">
                                <AiOutlineUserAdd size={25} color="rgb(187, 187, 187)" />
                            </div>
                            <div className="sidebar-text">
                                <span>SIGNUP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Sidebar;