import React from 'react';
import Header from './components/Header/index';
import FilmsList from './components/pages/FilmsList';
import FilmInfo from './components/pages/FilmInfo';
import CharacterInfo from './components/pages/CharacterInfo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<FilmsList />} />
        <Route path='film/:id' element={<FilmInfo />} />
        <Route path='character/:id' element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;