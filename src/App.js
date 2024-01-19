import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Score from './components/Score';
import Leaderboard from './components/Leaderboard';

import Success from './components/Success';
import Registration from './components/Registration';
import RaffleRegistration from './components/RaffleRegistration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/Score" element={<Score />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />


          <Route path="/RaffleRegistration" element={<RaffleRegistration />} />
      </Routes>
    </>
  )
}
export default App
