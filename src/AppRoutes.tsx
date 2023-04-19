import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CharacterSheetContainer } from './containers/CharacterSheetContainer';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/cloud-campaigns/'
          element={<CharacterSheetContainer />}></Route>
      </Routes>
    </Router>
  );
};
