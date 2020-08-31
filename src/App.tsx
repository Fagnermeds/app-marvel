import React from 'react';

import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {

  return (
    <>
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

export default App;
