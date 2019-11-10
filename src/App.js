import React from 'react';

import './css/main.css'
import Header from './components/header/Header';
import HeadSection from './pages/home/HeadSection';
import Footer from './components/footer/Footer';
import About from './pages/home/About';


function App() {
  return (
    <div className="App">
        <Header />
        <section className='section-container'>
            <HeadSection />
        </section>
        <section className='section-container'>

        </section>
        <section className='section-container'>

        </section>
        <section className='section-container'>
            <About />
        </section>
        <Footer />
    </div>
  );
}

export default App;
