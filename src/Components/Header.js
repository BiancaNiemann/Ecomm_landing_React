import React, {useState} from "react";

import menu from "../images/icon-menu.svg"
import close from "../images/icon-close.svg"
import logo from "../images/logo.svg"
import trolley from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"

export default function Header({openTrolleyClick}){
    const [hamburger, setHamburger] = useState(false)
    const [cross, setCross] = useState(false)

    function sideBar(){
        setHamburger(prevHamburger => !prevHamburger)
        setCross(prevCross => !prevCross)
    }
    
    function menuList(){
        return(
            <>
                <li className="list-item">Collections</li>
                <li className="list-item">Men</li>
                <li className="list-item">Women</li>
                <li className="list-item">About</li>
                <li className="list-item">Contact</li>
            </>
        )
    }
    return (
        <header>
            <nav className="navbar">

                {!hamburger && <img id="hamburger" className="hamburger" src={menu} alt="hamburger menu" onClick={sideBar}/>}
                {cross && <img className="x" id="x" src={close} alt="x to close" onClick={sideBar}/>}
                {!hamburger && <img className="logo" src={logo} alt="company logo"/>}
                {!hamburger && <ul className="list-box">{menuList()}</ul>}
                {cross && <ul className="side-menu">{menuList()}</ul>}
                <div className="icons">
                    <img id="trolley-nav" className="trolley-nav" src={trolley} alt="cart-icon" onClick={openTrolleyClick}/>
                    <img className="avatar-nav" src={avatar} alt="avatar"/>
                </div>
                <div id="number-items"></div>
            </nav>
        </header>
    )
}
///<Trolley openTrolley={openTrolley} />
//was duplicated in original code

/*<div className="side-menu" id="side-menu">
<ul className="side-list">
<img className="x" id="x" src={close}/>
<li className="side-item">Collections</li>
<li className="side-item">Men</li>
<li className="side-item">Women</li>
<li className="side-item">About</li>
<li className="side-item">Contact</li>
</ul>
</div>*/