import React from 'react';
import PIXEL from './components/Photocomponent/PIXEL';
import Todolist from './components/Photocomponent/Todolist';
import Photocomponent from './components/Photocomponent/Photocomponent';
import Head from './components/Photocomponent/Head';
import Calendrier from './components/calendrier';
import Home from './components/Home/Home';
import {Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <Routes>
      <Route path="/todo" element={<Todolist/>} />
      <Route path="/" element={<Home/>} />
      <Route path="/photo" element={<Photocomponent/>} />
      <Route path="/cal" element={<Calendrier/>} />
    </Routes>
  );
}

export default App;
