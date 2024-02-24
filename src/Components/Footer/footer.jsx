import React from "react";
import "./footer.scss"
import stul from "../img/white stul.png"
import fimg from "../img/Yaqnla.png"

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <img className="fstul" src={stul} alt="stul" />

                    <div className="fcenter">
                        <h2 className="fcenter__title">Luxury & Fancy Chair</h2>
                        <p className="fcenter__text">All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet.</p>
                    </div>

                    <div className="fright">
                        <div className="fright__top">
                            <h2 className="fright__top--t">20K+ <span className="fright__top--text">People Visiting this year</span></h2>

                            <h2 className="fright__top--t">15 <span className="fright__top--text">Years Experience</span></h2>
                        </div>

                        <div className="fright__bottom">
                            <div className="fright__bottom--img">
                                <img className="fright__btm--imgs" src={fimg} alt="Obunachilar" />
                            </div>
                            <span className="frigh__btm--tire"></span>
                            <div className="fright__bottom--box">
                                <h5 className="bottom__box--title">Trust Members</h5>
                                <p className="bottom__box--text">More than 50k peoples integrate with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer