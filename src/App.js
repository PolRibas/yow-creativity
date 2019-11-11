import React from 'react';

import './css/main.css'
import Header from './components/header/Header';
import HeadSection from './pages/home/HeadSection';
import Footer from './components/footer/Footer';
import About from './pages/home/About';
import Work from './pages/home/Work';
import OurProjects from './pages/home/OurProjects';


function App() {
  return (
    <div className="App">
        <Header />
        <section className='section-container'>
            <HeadSection />
        </section>
        <h1 className='principal-title'>Work</h1>
        <section className='section-container'>
            <Work />
        </section>
        <h1 className='principal-title'>Our Projects</h1>
        <section className='section-container'>
            <OurProjects />
        </section>
        <h1 className='principal-title'>About</h1>
        <section className='section-container'>
            <About />
        </section>
        <Footer />
    </div>
  );
}

export default App;
