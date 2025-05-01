import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
// import Project from '../pages/Project/Project';
import NotFound from '../pages/NotFound/NotFound';
import DeckMulligan from '../pages/Projects/DeckMulligan/DeckMulligan';
import FebrabanNews from '../pages/Projects/FebrabanNews/FebrabanNews';
import BBSeguros from '../pages/Projects/BBSeguros/BBSeguros';
import Mimo from '../pages/Projects/MimoRestaurant/MimoRestaurant';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/deckmulligan' element={<DeckMulligan />} />
      <Route path='/febraban-news' element={<FebrabanNews />} />
      <Route path='/bbseguros' element={<BBSeguros />} />
      <Route path='/mimo-restaurant' element={<Mimo />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
