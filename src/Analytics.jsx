import React from 'react';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import './HomePage.css';
import ThinWideCard from './components/ThinWideCard';

export default function Analytics()
{
    return(
    <div className="home-page">
     <Drawer />
      <div className="content">
       <AppBar title='Analytics'/>
       <ThinWideCard />
      </div>
    </div>
    )
}