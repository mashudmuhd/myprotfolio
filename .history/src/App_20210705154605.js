import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Cards from './components/Cards';
import Stack from './components/Stack';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stack />
      <Cards/>
    </div>
  );
}

export default App;
