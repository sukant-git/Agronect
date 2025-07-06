import React, { useState } from "react";
import "./AgriCare.css";
import { agri_display, agri_List } from "../../assets/assets";
import AgriDisplay from "../AgriDisplay/AgriDisplay";

const AgriCare = () => {
  const [selectedCat, setSelectedCat] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCat(category);
  };

  const filterData = selectedCat === "All" ? agri_display : agri_display.filter(item =>
        item.category.toLowerCase().includes(selectedCat.toLowerCase())
      );

  return (
    <div className="agri-care" id="agri-care"  data-aos="fade-down">
      <h1>Explore Crop Care</h1>
      <p className="agri-care-text">
        Healthy crops, healthy harvest 🌾. Learn about common plant diseases and
        how to prevent them. From fungal infections to nutrient deficiencies,
        stay one step ahead in your farming journey 🌱.
      </p>

      <div className="agri-care-scroll">
        {agri_List.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(item.agri_d)}
            className="agri-icon"data-aos="zoom-in"
          >
            <img src={item.agri_R} alt={item.agri_d} />
            <p>{item.agri_d}</p>
          </div>
        ))}
      </div>

      <hr />
      <AgriDisplay agriData={filterData} data-os="fade-in-down" />
    </div>
  );
};

export default AgriCare;
