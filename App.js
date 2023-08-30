import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PlaceToVisit from './pages/Placetovisit';
import Navigation from './components/Navigation';
import TimeToVisit from './components/BestTimeToVisit';

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Placetovisit" element={<PlaceToVisit />} />
        <Route path="/BestTimeToVisit" element={<TimeToVisit />} />
      </Routes>
    </div>
  );
};

export default App;