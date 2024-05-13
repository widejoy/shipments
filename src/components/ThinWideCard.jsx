// ThinWideCard.js

import React from 'react';
import './ThinWideCard.css';

const ThinWideCard = () => {
  return (
    <div className="thin-wide-card">
      <div className="card-content">
        <div className="card-section">
          <span>Type:</span>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="card-section">
          <span>Date:</span>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="card-section">
          <span>Period:</span>
          <select>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="card-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="ok-button">OK</button>
        </div>
      </div>
    </div>
  );
};

export default ThinWideCard;
