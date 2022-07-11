import Home from './Home';
import AboutUs from './AboutUs';
import Header from './components/Header'
import Menu from './components/Menu';
import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import Services from './Services';
import Contact from './Contact';
import { useParams } from "react-router-dom"
import { service } from './components/Services/data';

import ServePage from './components/Services/ServePage';







function App() {


  return (
    <div>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/services/:workType' element={<ServePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
