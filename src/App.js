import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function Site() {
  return (
    <Router>
      {/* páginas do site */}
      <Navbar />
      <Header/>
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
