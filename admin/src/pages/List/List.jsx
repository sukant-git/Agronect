import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  // ✅ Fetch the list of products
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/Product/list`);
      console.log(response.data); // ✅ Check if products exist in console

      if (response.data?.success) {
        setList(response.data.products || []);
      } else {
        toast.error("ERROR: Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const removeProduct = async (productId) => {
    try {
      const response = await axios.post(`${url}/api/Product/remove`, {
        id: productId,
      });

      if (response.data?.success) {
        toast.success(response.data.message || "Product removed successfully!");
        await fetchList(); // ✅ Refresh the list after deletion
      } else {
        toast.error(response.data.message || "Failed to remove product.");
      }
    } catch (error) {
      console.error(" Error removing product:", error);

      if (error.response) {
        // Server responded with an error status (e.g., 400, 500)
        toast.error(
          error.response.data?.message ||
            `Server error: ${error.response.status}`
        );
      } else if (error.request) {
        // Request was sent, but no response received
        toast.error(" No response from server. Please check your connection.");
      } else {
        // Something else went wrong
        toast.error(" Unexpected error occurred.");
      }
    }
  };

  return (
    <div className="list add flex-col">
    <h2>All Product List</h2>
    <br />
    <br />
  
    <div className="scroll-container">
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Farmer Name</b>
          <b>Farmer Location</b>
          <b>Action</b>
        </div>
  
        {list.length > 0 ? (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img
                src={`${url}/uploads/${item.image}`}
                alt={item.name}
                onError={(e) => (e.target.src = "/fallback-image.jpg")}
              />
              <p>{item.name}</p>
              <p>{item.category || "No Category"}</p>
              <p>${item.price}</p>
              <p>{item.farmerName}</p>
              <p>{item.farmerLocation || "Unknown Location"}</p>
              <p className="delete-btn" onClick={() => removeProduct(item._id)}>X</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  </div>
  
  );
};

export default List;
