// HomePage.js

import React from 'react';
import Drawer from './components/drawer'; // Import your Drawer component

const HomePage = () => {
  return (
    <div>
      <Drawer /> {/* Render the Drawer component */}
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is a basic homepage component.</p>
      </div>
    </div>
  );
};

export default HomePage;
