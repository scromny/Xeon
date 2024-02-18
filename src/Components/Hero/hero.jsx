import React, { useState } from "react";
import "./hero.scss";
import xeonfit from "../img/Group 1679.png";
import xeonstul from "../img/231170_copy_300x300-removebg-preview 1.png";
import yellow from "../img/Mebel1.svg";
import black from "../img/Mebel2.svg";
import purple from "../img/Mebel3.svg";
import strelka from "../img/Pastga.png";

const stullar = [
    {
        id: 1,
        fullimg: yellow,
        text: "Comfort Launge Chairs"
    },
    {
        id: 2,
        fullimg: black,
        text: "Comfort Launge Chairs"
    },
    {
        id: 3,
        fullimg: purple,
        text: "Comfort Launge Chairs"
    }
];


function Hero() {
    const [selectstul, setselectedstul] = useState(xeonstul);

    const selstul = (fullimg) => {
        setselectedstul(fullimg);
    }


    return (
        <>
        <div className="boxes">
            <div className="boxes__left">
                <img className="boxes__left--fit" src={xeonfit} alt="faceinstatwit" />
            </div>

            <div className="boxes__left1">
                <p className="boxes__left1--p">100% Quality Guranty</p>
                <h1 className="boxes__left1--title">Find Classy Furnitures For Your Comfort</h1>
                <p className="boxes__left1--text">All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet. </p>
                
                <div className="boxes__left1--box">
                    <span className="left1__box--span">Start From</span>
                    <h2 className="left1__box--sum">102.99 USD</h2>
                </div>

                <button className="boxes__left1--btn">Buy Now</button>
            </div>

            <div className="boxes__right">
                <div className="boxes__right--box">
                    <p className="right__box--text">Popular shades</p>
                    <div className="right__box--bir"></div>
                    <div className="right__box--ikki"></div>
                    <div className="right__box--uch"></div>
                    <div className="right__box--tort"></div>
                </div>

                <img data-aos="zoom-in" className="boxes__right--img" 
                src={selectstul} 
                alt="img" />
            </div>

            <div className="boxes__right1" data-aos="zoom-in">
                
                {stullar.map((item) => (
                    <div key={item.id} className="boxes__right--boxes">
                        <div 
                        className="boxes__right--box"
                        onClick={() => selstul(item.fullimg)}
                        >
                            <img className="right__box--img" src={item.fullimg} alt="img" />
                        </div>
                        <h6 className="right__box--title">{item.text}</h6>
                    </div>
                ))}

                <img className="boxes__right--strelka" src={strelka} alt="Pastga" />

                {/* <div className="boxes__right--box">
                    <img className="right__box--img" src={yellow} alt="stul" />
                    <h6 className="right__box--title">Comfort Launge Chairs</h6>
                </div>

                <div className="boxes__right--box">
                    <img className="right__box--img" src={black} alt="stul" />
                    <h6 className="right__box--title">Comfort Launge Chairs</h6>
                </div>

                <div className="boxes__right--box">
                    <img className="right__box--img" src={purple} alt="stul" />
                    <h6 className="right__box--title">Comfort Launge Chairs</h6>
                </div>

                <img className="boxes__right--strelka" src={strelka} alt="Pastga" /> */}
            </div>
        </div>
        </>
    )
}

export default Hero;