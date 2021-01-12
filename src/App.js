import React from 'react';
import './components/css/App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Routing from './Routing/Routing';
import UserProvider from './store/UserProvider';


const App = () => {

  return (
    <>
      <UserProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <Routing />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
