import React, { useContext } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const ProductItem = ({ id, name, image, price, location, farmerName }) => {
  const { cartItem = {}, addCart, removeCart, url } = useContext(StoreContext); 

  return (
    <div className="product-item" data-aos="slide-down">
      <div className="product-item-img-container">
        <img className="product-item-img" src={url + "/uploads/" + image} alt={name} />

      
        {id && !cartItem?.[id] ? ( 
          <img
            className="add"
            onClick={() => addCart(id)} 
            src={assets.add_white}
            alt="Add" 
          />
        ) : (
          <div className="product-item-counter">
            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{cartItem?.[id] || 0}</p> 
            <img onClick={() => addCart(id)} src={assets.add_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="product-item-info">
        <div className="product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt="Rating" />
        </div>
        <p className="product-item-price">₹{price} per Kg</p>
        <p className="product-item-farmerName"><span>farmerName: </span>   {farmerName}</p>
        <p className="farmer-location"> <span>farmerLocation:</span>  {location}</p>
      </div>
    </div>
  );
};

export default ProductItem;

