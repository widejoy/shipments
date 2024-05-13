// DocumentCard.js
import React from 'react';
import Tile from './Tile'; // Assuming you have the Tile component defined
import "./DocumentCard.css"; // Import CSS for styling

const DocumentCard = () => {
  return (
    <div className="document-card-container">
      <div className="document-card">
        <h2 className="document-card-title">Latest Documents</h2>
        <div className="tiles-container">
          <Tile date={"12 May 2024"} subtitle={"Sea job document (IM159075)"} time={"10:27 AM"} title={"Packing List"}/>
          <Tile date={"12 May 2024"} subtitle={"Sea job document (IM159075)"} time={"10:27 AM"} title={"Packing List"}/>
          <Tile date={"12 May 2024"} subtitle={"Sea job document (IM159075)"} time={"10:27 AM"} title={"Packing List"}/>
          <Tile date={"12 May 2024"} subtitle={"Sea job document (IM159075)"} time={"10:27 AM"} title={"Packing List"}/>
        </div>
      </div>
    </div>
  );
};

export default DocumentCard;
