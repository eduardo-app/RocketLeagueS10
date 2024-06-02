import './App.css';
import React from 'react';
import Home from './pages/home/home';
import Contatos from './pages/contatos/contatos';
import Fotos from './pages/fotos/fotos';
import Comentarios from './pages/comentarios/comentarios';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';



function App() {

  return (
    <HashRouter>   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contatos' element={<Contatos />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/comentarios' element={<Comentarios />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
