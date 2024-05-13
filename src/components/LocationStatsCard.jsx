// LocationStatsCard.js

import React from 'react';
import './LocationStatsCard.css';

const LocationStatsCard = ({ title }) => {
  return (
    <div className="location-stats-card">
      <h2 className="card-title">{title}</h2>
      <div className="stats-list">
        <div className="stats-item">
          <span>NHAVA SHEVA, INDIA</span>
          <span>378</span>
        </div>
        <div className="stats-item">
          <span>HONG KONG, HONG KONG</span>
          <span>70</span>
        </div>
        <div className="stats-item">
          <span>YANTIAN, CHINA</span>
          <span>48</span>
        </div>
        <div className="stats-item">
          <span>DALIAN, CHINA</span>
          <span>28</span>
        </div>
        <div className="stats-item">
          <span>SHANGHAI, CHINA</span>
          <span>31</span>
        </div>
        <div className="stats-item">
          <span>LONDON GATEWAY PORT, UK</span>
          <span>23</span>
        </div>
      </div>
    </div>
  );
};

export default LocationStatsCard;
