import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About-Me';
import Footer from './components/Footer';
import ContactForm from './components/Contact';
import Projects from './components/Project';

function App() {
  const [categorySelected, setCategorySelected] = useState('me');


  return (
    <div>
      <Header setCategorySelected={setCategorySelected} categorySelected={categorySelected} />
      {categorySelected === 'me' && <About />}
      {categorySelected === 'contact' && <ContactForm />}
      {categorySelected === 'portfolio' && <Projects />}
      <Footer />
    </div>
  );
}

export default App;