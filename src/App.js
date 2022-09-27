
import './App.css';

import './components/GalleryData.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.js';
import  GalleryData from './components/GalleryData.js';
import { useEffect, useState } from "react";

function App() {
  
  
  return (
    
    <Router>
      
      <Routes>
        <Route path='/' element={
          
          <GalleryData />
        } />
      </Routes>
    </Router>
   

  );
}


export default App;
