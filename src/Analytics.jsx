import React from 'react';
import Drawer from './components/Drawer';
import AppBar from './components/AppBar';
import './HomePage.css';
import ThinWideCard from './components/ThinWideCard';
import SinglePieCard from './components/SinglePieCard';
import LocationStatsCard from './components/LocationStatsCard';
import Shipments from './components/Shipments';

export default function Analytics() {
  return (
    <div className="home-page">
      <Drawer />
      <div className="content">
        <AppBar title='Analytics' />
        <ThinWideCard />
        <div className='card-container'>
          <div className="pie-cards-container">
            <SinglePieCard title={"Milestones"} data={[
              { label: 'BOOKED (19)', value: 19, color: 'rgb(107, 18, 10)' },
              { label: 'DISCHARGED (29)', value: 29, color: 'rgb(235, 93, 80)' },
              { label: 'ARRIVED (22)', value: 20, color: 'rgb(247, 166, 104)' },
              { label: 'DELIVERED (393)', value: 15, color: 'rgb(123, 184, 150)' },
              { label: 'RETURNED (149)', value: 15, color: 'rgb(16, 115, 230)' },
            ]} />
            <SinglePieCard title={"Timelines"} data={[
              { label: 'ON TIME (681)', value: 681, color: 'rgb(123, 184, 150)' },
              { label: 'LATE (1)', value: 19, color: 'rgb(247, 166, 104)' }
            ]} />
          </div>
          <LocationStatsCard title={"Loading"} />
          <LocationStatsCard title={"Discharge"} />
          <LocationStatsCard title={"Delivery"} />
          <LocationStatsCard title={"Shipper"} />
          <LocationStatsCard title={"Consignee"} />
          <LocationStatsCard title={"Carrier"} />
          <Shipments />
        </div>
      </div>
    </div>
  );
}
