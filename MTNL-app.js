import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MTNLLayout from './components/MTNL/MTNLLayout';

const App = () => {
  return (
    <BrowserRouter> {/* BrowserRouter should wrap the entire app */}
      <MTNLLayout /> {/* This will render the common layout for all pages */}
    </BrowserRouter>
  );
};

export default App;
