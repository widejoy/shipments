// HomePage.js

import React from 'react';
import Drawer from './components/Drawer'; // Import your Drawer component
import AppBar from './components/AppBar'; // Import your AppBar component

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <AppBar /> {/* Render the AppBar component */}
      </div>
      <Drawer /> {/* Render the Drawer component */}
      
    </div>
  );
};

export default HomePage;
