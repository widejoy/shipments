import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './Tile.css'; // Import CSS for styling

const Tile = ({ title, subtitle, date, time }) => {
  return (
    <div className="tile-card">
      <div className="tile">
        <div className="left-section">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" />
          <div className="title-subtitle">
            <div className="tile-title">{title}</div>
            <div className="tile-subtitle">{subtitle}</div>
          </div>
        </div>
        <div className="right-section">
          <div className="date-time">
            <div className="date">{date}</div>
            <div className="time">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;
