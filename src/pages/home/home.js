import React from "react";
import Header from "../../components/header/header";
import "./styles.css"
import Banner from '../../assets/banner.png'
import Video from '../../assets/video.mp4'
import Season10 from '../../assets/season10.png'
import Footer from "../../components/footer/footer";

function Home(){

    return (
        <div>
            <Header />
            <div id="banner-div">
                <img alt="" id='banner' src={Banner} />
            </div>
            <div className="gradient"></div>
            <div id='trailer-container'>
                <div className="content">
                    <video controls className='trailer'>
                        <source src={Video} />
                        Seu navegador não possui suporte para vídeos.
                    </video>
                    <div id='sinopse'>
                        <img alt="" id='season10' src={Season10} />
                        <p>
                            DAS PROFUNDEZAS DO DESERTO, SURGE UMA NOVA VIDA. QUEM SERÁ A PRIMEIRA PESSOA A DESCOBRIR ESSE TESOURO PERDIDO DAS AREIAS?
                        </p>
                        <p>
                            CURTA A TEMPORADA 10 E APROVEITE A NOVA VARIANTE "OASIS" DA ARENA DEADEYE CANYON OU GANHE RECOMPENSAS REJUVENESCEDORAS COM O ROCKET PASS, INCLUINDO O VOLKSWAGEN GOLF II GTI.
                        </p>
                        <button className="button" >ROCKET PASS</button>
                    </div>
                </div>
            </div>
            <div id="rocket-card-container">
                <div className="cards-content">
                    <div className="card banner-1">OASIS - DEAD EYE CANYON</div>
                    <div className="card banner-2">VOLKSWAGEN GOLF II GTI</div>
                    <div className="card banner-3">ROCKET PASS</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home