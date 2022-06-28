import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import Welcome from './Components/Welcome/welcome';
import Diferenciais from './Components/Diferenciais/diferenciais';
import Steps from './Components/Steps/steps';
import AboutUs from './Components/AboutUs/aboutUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Site() {
  return (
    <Router>
      {/* páginas do site */}
      <Navbar />
      <Header/>
      <Intro/>
      <Welcome/>
      <Diferenciais/>
      <Steps/>
      <AboutUs/>
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
