import Navbar from './Components/Navbar/navbar';
import Header from './Components/Header/header';
import Intro from './Components/Intro/intro';
import Welcome from './Components/Welcome/welcome';
import Diferenciais from './Components/Diferenciais/diferenciais';
import Steps from './Components/Steps/steps';
import SelectPlans from './Components/Select_Plans/select_plans';
import AboutUs from './Components/AboutUs/aboutUs';
import Footer from './Components/Footer/footer';
import CreateUploadText from './Components/CreateUploadText/createUploadText';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Site() {
  return (
    <Router>
      {/* Categorias do site */}
      <Navbar />
      <Header/>
      <Intro/>
      <Welcome/>
      <Diferenciais/>
      <Steps/>
      <SelectPlans/>
      <AboutUs/>
      <Footer />
      {/* <CreateUploadText /> */}
      {/* <TextForm/> */}
      {/* rotas de navegação */}
      <Routes>
        <Route path='/Como Funciona'/>
        <Route path='/Quem Somos'/>
        <Route path='/Contato'/>
        <Route path='/Inscreva-se'/>
        <Route path='./select_plans'/>
      </Routes>
    </Router>
  );
}

export default Site;
