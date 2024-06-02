import Footer from "../../components/footer/footer"
import React from "react";
import Header from "../../components/header/header";
import "./styles.css"

function Contatos() {
    return (
        <div>
            <Header />
            <div>
                <div id="background-overlay"></div>
                <div id="background"></div>
            </div>
            <div id="contact-container">
                <div className="contact-content">
                    <div className="title-contact">
                        ENTRE EM CONTATO CONOSCO!
                    </div>
                    <div className="inputs">
                        <div className="div_nome">
                            <div>Nome completo</div>
                            <input className="input" type="text" />
                        </div>
                        <div className="div_email">
                            <div>Seu email</div>
                            <input className="input" type="email" />
                        </div>
                        <div className="div_mensagem">
                            <div>Sua mensagem</div>
                            <textarea className="input-mensagem" type="mensagem" />
                        </div>
                    </div>
                    <button id="botao-enviar">ENVIAR</button>
                </div>
            </div>
            <div id="contact-bottom-gradient"></div>
            <Footer />
        </div>
    )
}

export default Contatos