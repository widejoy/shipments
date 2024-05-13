// SinglePieCard.js
import React from 'react';
import PieChart from './piechart';
import './SinglePieCard.css'; // Import CSS for styling

const SinglePieCard = ({ title, data }) => {
  return (
    <div className="single-pie-card">
      <h2 className="card-title">{title}</h2>
      <div className="chart-container">
        <PieChart data={data} isBottom={false} />
      </div>
    </div>
  );
};

export default SinglePieCard;
