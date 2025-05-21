import Headertop from "./HeaderT-C.jsx";
import Hero from "./hero.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import React from "react";
import Tabs from "./Departments.jsx";
import Doctorss from "./Doctors.jsx";
import  Questions from "./Questions.jsx";
import GelerySection from "./Gelery.jsx";
import ContactSection from "./Contact.jsx";
import FooterSection from "./Footer.jsx";
function App() {
 return(
   <>
    <Headertop/>
    <Hero/>
   <About/>
   <Services/>
   <Tabs/>
   <Doctorss/>
   < Questions/>
   <GelerySection/>
   <ContactSection/>
   <FooterSection/>
   </>
 ); 
 
}

export default App;
