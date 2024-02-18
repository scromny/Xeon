import React from "react";
import "./header.scss";
import xeonhome from "../img/Mask Group.svg"
import xeonLogo from "../img/Mask Group (1).svg"
import xeonmenu from "../img/Group 1678.svg"

function Header() {
    return (
        <>
        <div className="header">
            <div className="homelogo">
                <img className="home" src={xeonhome} alt="Home" />
                <img className="logo" src={xeonLogo} alt="Logo" />
            </div>
            <ul className="list">
                <li className="item">
                    <a className="link" href="#">About</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Blog</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Agency</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Featured</a>
                </li>

                <li className="item">
                    <a className="link" href="#">Price</a>
                </li>
            </ul>

            <img className="menu" src={xeonmenu} alt="Menu" />
        </div>
        </>
    )
}

export default Header;