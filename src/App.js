import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Skills from './components/Skills';
import Nopage from './components/Nopage';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import About from './components/About';


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <div><Slider/><Skills/></div>}/>
        <Route exact path="/portfolio" element={ <div><Slider/><Skills/></div>}/>
        <Route exact path="/services" element={<Services/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path="*" element={<Nopage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
     </>
  );
}

export default App;
