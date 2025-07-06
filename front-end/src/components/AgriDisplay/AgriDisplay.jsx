import React from "react";
import "./AgriDisplay.css";

const AgriDisplay = ({ agriData }) => {
  return (
    <div className="agri-display"  data-os="fade-in-down">
      {agriData.map((item, index) => (
        <div key={index} className="agri-detail-card" >
          <img src={item.image} alt={item.name} className="disease-image" />

          <h2>{item.name}</h2>

          <p>
            <strong>Category:</strong> {item.category}
          </p>

          <p>
            <strong>Biological Name:</strong> {item.biological_name}
          </p>

          <p>
            <strong>Description:</strong> {item.description}
          </p>

          <p>
            <strong>Prevention:</strong> {item.prevention}
          </p>

          <p>
            <strong>Pesticide:</strong> {item.pesticide}
          </p>

          <p>
            <strong>Fertilizer:</strong> {item.fertilizer}
          </p>
          <p><strong>Affected Plants: </strong>{item. affected_plants}</p>

          {item.fertilizer_link && (
            <a href={item.fertilizer_link} target="_blank" rel="noreferrer">
              View Fertilizer
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default AgriDisplay;
