// NewCard.js
import React from 'react';
import "./NewCard.css";

const NewCard = () => {
  return (
    <div className="new-card">
      <h2 className="new-card-title">Announcements</h2>
      <h3 className="new-card-subtitle">Soon you will see latest announcements/new in this section.</h3>
      <img src={"announcements.PNG"} alt="Card Image" className="new-card-image" />
    </div>
  );
};

export default NewCard;
