import React from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css";


import Success from './components/Success';
import Registration from './components/Registration';
import RaffleRegistration from './components/RaffleRegistration';

const App = () => {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/RaffleRegistration" element={<RaffleRegistration />} />
      </Routes>
    </>
  )
}
export default App
