import React from "react";

import Navbar from '../Components/Navbar/navbar';
import Header from '../Components/Header/header';
import Intro from '../Components/Intro/intro';
import Welcome from '../Components/Welcome/welcome';
import Diferenciais from '../Components/Diferenciais/diferenciais';
import Steps from '../Components/Steps/steps';
import SelectPlans from '../Components/Select_Plans/select_plans';
import AboutUs from '../Components/AboutUs/aboutUs';
import Footer from '../Components/Footer/footer';

function Landing(){
  return(
    <>
    <Navbar />
      <Header/>
      <Intro/>
      <Welcome/>
      <Diferenciais/>
      <Steps/>
      <SelectPlans/>
      <AboutUs/>
      <Footer />
    </>
  )
}

export default Landing;