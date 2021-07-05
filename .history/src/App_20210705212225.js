import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Languages from './components/Languages'
import Footerbt from './components/Footerbt'


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Cards/>
      <Projects/>
      <Languages/>
      <Footerbt/>
      
      
     
    </div>
  );
}

export default App;
