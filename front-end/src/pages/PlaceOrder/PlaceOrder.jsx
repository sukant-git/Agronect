// import React, { useContext, useState } from "react";
// import "./PlaceOrder.css";
// import { StoreContext } from "../../Context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const PlaceOrder = () => {
//   const { gettotalCartAmt, cartItem, product_list, url, token } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "",
//     phone: "",
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleProceedToOrder = async () => {
//     const isValid = Object.values(data).every((value) => value.trim() !== "");
//     if (!isValid) {
//       toast.error("⚠️ Please fill all delivery fields.");
//       return;
//     }

//     const orderItems = product_list
//       .filter((item) => cartItem[item._id] > 0)
//       .map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         quantity: cartItem[item._id],
//       }));

//     const orderData = {
//       items: orderItems,
//       amount: gettotalCartAmt() + 2,
//       address: data,
//       paymentStatus: false, // COD
//     };

//     try {
//       const response = await axios.post(`${url}/api/order/place`, orderData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success("✅ Order placed! Our employee will contact you for delivery.");
//         setTimeout(() => {
//           navigate("/myorders");
//         }, 3000); // Wait for 3 seconds before redirect
//       } else {
//         toast.error("❌ Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       console.error("Order placement failed:", err);
//       toast.error("🚨 Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="place-order">
//       <ToastContainer position="top-right" theme="colored" />

//       <div className="place-order-left">
//         <p className="title">Delivery Information</p>
//         <div className="multi-fields">
//           <input type="text" required placeholder="First Name" name="firstName" onChange={onChangeHandler} value={data.firstName} />
//           <input type="text" required placeholder="Last Name" name="lastName" onChange={onChangeHandler} value={data.lastName} />
//         </div>
//         <input type="email" required placeholder="Email address" name="email" onChange={onChangeHandler} value={data.email} />
//         <input type="text" required placeholder="Street" name="street" onChange={onChangeHandler} value={data.street} />
//         <div className="multi-fields">
//           <input type="text" required placeholder="City" name="city" onChange={onChangeHandler} value={data.city} />
//           <input type="text" required placeholder="State" name="state" onChange={onChangeHandler} value={data.state} />
//         </div>
//         <div className="multi-fields">
//           <input type="text" required placeholder="Pin code" name="pincode" onChange={onChangeHandler} value={data.pincode} />
//           <input type="text" required placeholder="Country" name="country" onChange={onChangeHandler} value={data.country} />
//         </div>
//         <input type="text" required placeholder="Phone" name="phone" onChange={onChangeHandler} value={data.phone} />
//       </div>

//       <div className="place-order-right">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-detail">
//               <p>Subtotal</p>
//               <p>{gettotalCartAmt()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <p>Delivery Fee</p>
//               <p>{gettotalCartAmt() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-detail">
//               <b>Total</b>
//               <b>{gettotalCartAmt() === 0 ? 0 : gettotalCartAmt() + 2}</b>
//             </div>
//           </div>

//           <button type="button" onClick={handleProceedToOrder}>
//             PROCEED TO ORDER
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlaceOrder;
import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import { generatePath, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PlaceOrder = () => {
  const { gettotalCartAmt, cartItem, product_list, url, token } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceedToOrder = async () => {
    const isValid = Object.values(data).every((value) => value.trim() !== "");
    if (!isValid) {
      toast.error("⚠️ Please fill all delivery fields.");
      return;
    }

    const orderItems = product_list
      .filter((item) => cartItem[item._id] > 0)
      .map((item) => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        quantity: cartItem[item._id],
      }));

    const orderData = {
      items: orderItems,
      amount: gettotalCartAmt() + 2,
      address: data,
      paymentStatus: false, // COD
    };

    try {
      const response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success("✅ Order placed! Our employee will contact you for delivery.");
        setTimeout(() => {
          navigate("/");
        }, 3000); // Redirect after 3 seconds
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Order placement failed:", err);
      toast.error("🚨 Server error. Please try again later.");
    }
  };





    useEffect(()=>{
      if(!token){
        navigate('/cart')
      }
        else if(gettotalCartAmt()==0){
          navigate('/cart')
        }
      
    },[token])



  return (
    <div className="place-order">
      <ToastContainer position="top-right" theme="colored" />
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" required placeholder="First Name" name="firstName" onChange={onChangeHandler} value={data.firstName} />
          <input type="text" required placeholder="Last Name" name="lastName" onChange={onChangeHandler} value={data.lastName} />
        </div>
        <input type="email" required placeholder="Email address" name="email" onChange={onChangeHandler} value={data.email} />
        <input type="text" required placeholder="Street" name="street" onChange={onChangeHandler} value={data.street} />
        <div className="multi-fields">
          <input type="text" required placeholder="City" name="city" onChange={onChangeHandler} value={data.city} />
          <input type="text" required placeholder="State" name="state" onChange={onChangeHandler} value={data.state} />
        </div>
        <div className="multi-fields">
          <input type="text" required placeholder="Pin code" name="pincode" onChange={onChangeHandler} value={data.pincode} />
          <input type="text" required placeholder="Country" name="country" onChange={onChangeHandler} value={data.country} />
        </div>
        <input type="text" required placeholder="Phone" name="phone" onChange={onChangeHandler} value={data.phone} />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>{gettotalCartAmt()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{gettotalCartAmt() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{gettotalCartAmt() === 0 ? 0 : gettotalCartAmt() + 2}</b>
            </div>
          </div>

          <button type="button" onClick={handleProceedToOrder}>
            PROCEED TO ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

