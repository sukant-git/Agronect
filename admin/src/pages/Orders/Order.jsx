import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";

import "./Order.css";

const Order = ({ url }) => {
  const [data, setData] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setData(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Something went wrong!");
    }
  };

    const statusHandler=async(event,orderId)=>{
      const response= await axios.post(url+"/api/order/status",{
        orderId,
        status:event.target.value
      })
      if(response.data.success){
       await fetchAllOrders();
      }



    }


  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h2>All Orders</h2>
  
      {/* Scrollable Wrapper */}
      <div className="order-list-scroll">
        <div className="order-list">
          {data.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel_icon} alt="parcel" />
              <div>
                <p className="order-item-product">
                  {order.items.map((item, i) =>
                    i === order.items.length - 1
                      ? `${item.name} x ${item.quantity}`
                      : `${item.name} x ${item.quantity}, `
                  )}
                </p>
                <p>Items: {order.items.length}</p>
                <p>${order.amount}</p>
              </div>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <p className="order-item-address">{order.address.street}</p>
              <p>
                Street: {order.address.street}, City: {order.address.city}, State:{" "}
                {order.address.state}, Country: {order.address.country}, Pincode:{" "}
                {order.address.pincode}, Phone: {order.address.phone}
              </p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order. status}>
                <option value="Product Processing">Product Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Order delivered">Order delivered</option>
              </select>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};  

export default Order;
