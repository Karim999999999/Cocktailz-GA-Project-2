import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Cocktails from './Components/Cocktails';
import CocktailShow from './Components/CocktailShow';
import Random from './Components/Random'
import Warning from './Components/Warning';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktails' element={<Cocktails />} />
        <Route path='/cocktails/:idDrink' element={<CocktailShow />} />
        <Route path='/random' element={<Random />} />
        <Route path='drinkresponsibly' element={<Warning />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
