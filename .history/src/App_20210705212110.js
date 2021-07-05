import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Languages from './components/Languages'
import footer from './components/footer'


function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Cards/>
      <Projects/>
      <Languages/>
      <footer/>
      
     
    </div>
  );
}

export default App;
