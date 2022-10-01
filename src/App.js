<<<<<<< HEAD
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Intro from "./Components/Intro/intro";
import Welcome from "./Components/Welcome/welcome";
import Diferenciais from "./Components/Diferenciais/diferenciais";
import Steps from "./Components/Steps/steps";
import SelectPlans from "./Components/Select_Plans/select_plans";
import AboutUs from "./Components/AboutUs/aboutUs";
import EditorPage from "./Components/Editor-page/editor-page";
import Editor from "./Components/Editor/Editor";
import Footer from "./Components/Footer/footer";
import {
  BrowserRouter as
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";

function Site() {
  return (
      <Routes>
        {/*
        <Header/>
        <Intro/>
        <Welcome/>
        <Diferenciais/>
        <SelectPlans/>
        <AboutUs/>
        <EditorPage/>
        <Editor/>
         */}
      
      <Navbar />
      <Outlet/>
        <NavLink path="/como-funciona" element={<Header />} />
        <NavLink path="/intro" element={<Intro />} />
        <NavLink path="/bem-vindo" element={<Welcome />} />
        <NavLink path="/nossos-diferenciais" element={<Diferenciais />} />
        <NavLink path="/passo-a-passo" element={<Steps />} />
        <NavLink path="/selecione-seu-plano" element={<SelectPlans />} />
        <NavLink path="/sobre" element={<AboutUs />} />
        <NavLink path="/rodape" element={<Footer />} />
        <NavLink path="/editor-page" element={<EditorPage />} >
          <NavLink path="/editor" element={<Editor />} />
      </NavLink>
      <Footer/>
      </Routes>
=======

// import CreateUploadText from './Components/CreateUploadText/createUploadText';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Landing from './Pages/landing';
import EditorPage from './Pages/editor';
import Footer from './Components/Footer/footer';

function Site() {
  return (

  <Router>
     <Routes>
        <Route path='/editor' element={<EditorPage/>} />
        <Route path='/' element={<Landing/>} />
        <Route path='/footer' element={<Footer/>} />
     </Routes>
  </Router>
>>>>>>> 6011b4f8307578565e3124a7a30a6c945b56c16f
  );
}

export default Site;
