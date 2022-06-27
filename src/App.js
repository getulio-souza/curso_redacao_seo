import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function Site() {
  return (
    <Router>
      {/* páginas do site */}
      <Navbar />
      <Header/>
      <Intro/>
      {/* rotas de navegação */}
      <Routes>
        <Route path='/Como Funciona'/>
        <Route path='/Quem Somos'/>
        <Route path='/Contato'/>
        <Route path='/Inscreva-se'/>
      </Routes>
    </Router>
  );
}

export default Site;
