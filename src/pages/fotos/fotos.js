import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import "./styles.css"

function Fotos() {
    return (
        <div id="photos-body">
            <Header />
            <div id="header-gradient"></div>
            <div id="photos-container">
                <div id="photos-content">
                    <div className="quad photo1"></div>
                    <div className="quad photo2"></div>
                    <div className="quad photo3"></div>
                    <div className="quad photo4"></div>
                    <div className="standing photo5"></div>
                    <div className="standing photo6"></div>
                    <div className="standing photo7"></div>
                    <div className="standing photo8"></div>
                    <div className="lowered photo9"></div>
                    <div className="lowered photo10"></div>
                    <div className="double-quad photo11"></div>
                    <div className="double-quad photo12"></div>
                </div>
            </div>
            <div id="photos-bottom-gradient"></div>
            <Footer />
        </div>
    )
}

export default Fotos