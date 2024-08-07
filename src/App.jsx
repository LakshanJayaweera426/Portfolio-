import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import MyWork from "./components/mywork/MyWork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Bubbles from "./components/bubbles/Bubbles";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Services/>
      <Contact/>
      <Footer/>
      <Bubbles />
    </div>
  )
}


export default App