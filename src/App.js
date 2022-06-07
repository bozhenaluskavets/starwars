import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FilmsList from './components/Profile/FilmsList/FilmsList';
import FilmInfo from './components/Profile/FilmInfo/FilmInfo';
import Characters from './components/Profile/Characters/Characters';
import CharacterInfo from './components/Profile/CharacterInfo/CharacterInfo';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<FilmsList />} />
        <Route path='film/:id' element={<FilmInfo />} />
        <Route path='character/:bla' element={<CharacterInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;