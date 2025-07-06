// import { useContext, useEffect, useState } from "react";
// import "./MyOrders.css";
// import { StoreContext } from "../../Context/StoreContext";
// import axios from "axios";
// import { assets } from "../../assets/assets";

// const MyOrders = () => {
//   const [data, setData] = useState([]);
//   const { url, token } = useContext(StoreContext);

//   const fetchOrder = async () => {
//     const response = await axios.post(
//       url + "/api/order/userorders",
//       {},
//       { headers: { token } }
//     );

//     setData(response.data.data);
//     // console.log(response.data.data)
//   };

//   useEffect(() => {
//     if (token) {
//       fetchOrder();
//     }
//   }, [token]);

//   return (
//     <div className="my-orders">
//       <h2>My Orders</h2>
//       <div className="container">
//         {data.map((order, index) => {
//           return (
//             <div key={index} className="my-orders-order">
//               <img src={assets.parcel_icon} alt="" />
//               <p>
//                 {order.items && order.items.length > 0
//                   ? order.items
//                       .map(
//                         (item) =>
//                           `${item.name ?? "Item"} x ${item.quantity ?? 0}`
//                       )
//                       .join(", ")
//                   : "No items"}{" "}
//               </p>
//               <p>₹ {order.amount}</p>
//               <p>Items:{order.items.length}</p>
//               <p>
//                 <span>&#x25cf;</span> <b>{order.status || "pending"}</b>
//               </p>
//               <button>Track Order</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
import { useContext, useEffect, useState } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrder = async () => {
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { token } }
      );
      setData(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
      setData([]);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.length > 0 ? (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="parcel icon" />
              <p>
                {Array.isArray(order.items) && order.items.length > 0
                  ? order.items
                      .map((item) => `${item.name || "Item"} x ${item.quantity || 0}`)
                      .join(", ")
                  : "No items"}
              </p>
              <p>₹ {order.amount}</p>
              <p>Items: {order.items?.length || 0}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status || "pending"}</b>
              </p>
              <button onClick={fetchOrder}>Track Order</button>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;

