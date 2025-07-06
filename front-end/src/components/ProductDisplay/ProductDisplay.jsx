import React, { useContext } from "react";
import "/src/components/ProductDisplay/ProductDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import ProductItem from "../Productitem/Productitem";

const ProductDisplay = ({ category }) => {
  const { product_list } = useContext(StoreContext);

  return (
    <div className="product-display" id="product-display"data-aos="fade-down">
      <h2>Fresh products near you</h2>
      <div className="product-display-list" data-aos="slide-up">
        {product_list.map((item, index) => {
          
          if (category === "All" || category === item.category) {
            return (
              <ProductItem data-aos="slide-up"
                className="product-item"
                id={item._id}
                key={index}
                name={item.name}
                image={item.image}
                price={item.price}
                location={item.farmerLocation}
                farmerName={item.farmerName}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
