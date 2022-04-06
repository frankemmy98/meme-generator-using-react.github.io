import React from 'react';
import './App.scss';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className='container'>
    <Header />
    <Meme />
    </div>
  )
}

export default App;
