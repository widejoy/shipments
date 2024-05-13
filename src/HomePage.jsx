// HomePage.js
import React from 'react';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import Card from './components/Card';
import './HomePage.css';
import { faList, faTasks, faBan, faClock } from '@fortawesome/free-solid-svg-icons';
import PieChartContainer from './components/PieChartContainer';
import DocumentCard from './components/DocumentCard';
import NewCard from './components/NewCard'; // Import the NewCard component

const HomePage = () => {
  return (
    <div className="home-page">
      <Drawer />
      <div className="content">
        <AppBar />
        <div className="card-container">
          {/* Previous cards */}
          <Card
            heading="Total Bookings"
            subtitle="501 Bookings"
            iconColor="rgb(107, 18, 10)"
            icon={faList}
          />
          {/* Remaining cards */}
          <Card
            heading="Bookings Utilized"
            subtitle="501 Bookings"
            iconColor="rgb(247, 166, 104)"
            icon={faTasks}
          />
          <Card
            heading="Bookings Canceled"
            subtitle="0 Bookings"
            iconColor="rgb(235, 93, 80)"
            icon={faBan}
          />
          <Card
            heading="Utilization"
            subtitle="100%"
            iconColor="rgb(123, 184, 150)"
            icon={faClock}
          />
          <div className="map-container">
            <img src={"map.png"} alt="Map" className="map-image" />
          </div>
          <PieChartContainer />
          <DocumentCard />
          {/* Include the NewCard component */}
          <NewCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
