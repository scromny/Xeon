import React from "react";
import "./header.scss";
import xeonhome from "../img/Mask Group.svg"
import xeonLogo from "../img/Mask Group (1).svg"
import xeonmenu from "../img/Group 1678.svg"

function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="homelogo">
                        <img className="home" src={xeonhome} alt="Home" />
                        <img className="logo" src={xeonLogo} alt="Logo" />
                    </div>
                    <ul className="list">
                        <li className="item">
                            <a className="link" href="#link">About</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#link">Blog</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#link">Agency</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#link">Featured</a>
                        </li>

                        <li className="item">
                            <a className="link" href="#link">Price</a>
                        </li>
                    </ul>

                    <img className="menu" src={xeonmenu} alt="Menu" />
                </div>
            </div>
        </>
    )
}

export default Header;