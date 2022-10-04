import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './Card';
import Home from './Home';
import CardDetails from './CardDetails';

const Router =()=>{
    return(
    <div>
    <BrowserRouter >
   <Routes>
   <Route path="/" element={<Home />} />
     <Route path="/card" element={<Card />} />
     <Route path="/cardDetails" element={<CardDetails />} />
     </Routes>
     </BrowserRouter>
     </div>
)
}
export default Router