import React, { useContext } from "react"
import Logo from "../../assets/logo.png"
import "./styles.css"
import { Link } from "react-router-dom"
import { UserContext } from "../../contexts/userContexts"


function Footer() {

    const {login, setLogin} = useContext(UserContext)

    return (
        <footer>
            <div id="footer-gradient"></div>
            <img alt="" id="logo" src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Eduardo Pereira</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={ {textDecoration: 'none'} } to='/'>
                        <li>HOME</li>
                        </Link>

                        <Link style={ {textDecoration: 'none'} } to='/contatos'>
                        <li>CONTATOS</li>
                        </Link>

                        <Link style={ {textDecoration: 'none'} } to='/fotos'>
                        <li>FOTOS</li>
                        </Link>

                        <Link style={ {textDecoration: 'none'} } to='/comentarios'>
                        <li>COMENTÁRIOS</li>
                        </Link>

                        <li onClick={() => setLogin(!login)}>{login ? 'Logout' : 'Login'}</li>

                </ul>
            </nav>
        </footer>
    )
}

export default Footer
