import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
import Logo from "../../assets/logo.png"
import { UserContext } from '../../contexts/userContexts';

function Header() {

    const {login, setLogin} = useContext(UserContext)

    return (
        <header>
            <Link to='/'>
            <img alt="" id='logo' src={Logo} />
            </Link>            
            <nav>
                <ul>
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
        </header>
    )
}

export default Header