import React from 'react';

import { Header, Hero, Footer } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='page__bg'>
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App