// import React, { useState } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Add = () => {

//   const url = "http://localhost:4000";

//   const [image, setImage] = useState(false);

//   const [data, setData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     farmerName: "",
//     farmerLocation: ""
//   });

//   const onChangeHandle = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   //         useEffect(()=>{
//   // console.log(data)
//   //         },[data])

//   // const onSubmitHandle = async (event) => {
//   //   event.preventDefault();
//   //   const formData = new FormData();
//   //   formData.append("image", image);
//   //   formData.append("name", data.name);
//   //   formData.append("category", data.category);
//   //   formData.append("price", Number(data.price));
//   //   formData.append("farmerName", data.farmerName);
//   //   formData.append("farmerLocation", data.farmerLocation);

//   //   const response = await axios.post(`${url}/api/Product/add`,formData);
//   //   if(response.data.success){

//   //       setData({
//   //           name: "",
//   //           category: "vegetable",
//   //           price: "",
//   //           farmerName: "",
//   //           farmerLocation: ""

//   //       })
//   //       setImage(false);
//   //       toast.success(response.data.message || "Product added successfully!");
//   //   }
//   //   else{
//   //       toast.error(response.data.message || "Something went wrong!");

//   //   }

//   // };

//   const onSubmitHandle = async (event) => {
//     event.preventDefault();

//     if (!image) {
//         toast.error("Please upload an image.");
//         return;
//     }

//         const formData = new FormData();
//         formData.append("image", image);
//         formData.append("name", data.name.trim());
//         formData.append("category", data.category.trim());
//         formData.append("price", Number(data.price));
//         formData.append("farmerName", data.farmerName.trim());
//         formData.append("farmerLocation", data.farmerLocation.trim());

//         const response = await axios.post(`${url}/api/Product/add`, formData, {
//             headers: { "Content-Type": "multipart/form-data" }, // ✅ Ensure correct headers
//         });

//         if (response.data.success) {
//             setData({
//                 name: "",
//                 category: "vegetable",
//                 price: "",
//                 farmerName: "",
//                 farmerLocation: "",
//             });
//             setImage(null);
//             toast.success(response.data.message || "Product added successfully!");
//         } else {
//             toast.error(response.data.message || "Something went wrong!");
//         }

// };

//   return (
//     <div className="add">
//       <form className="flex-col" onSubmit={onSubmitHandle}>
//         <div className="add-img-upload flex-col">
//           <p>Upload image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandle}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="type here"
//           />
//           <div className="add-category-price">
//             <div className="add-category flex-col">
//               <p>Product category</p>
//               <select onChange={onChangeHandle} name="category" id="">
//                 <option value="vegetable">vegetables</option>
//                 <option value=" diary">dairy</option>
//                 <option value="millets">millets</option>
//                 <option value="spices">spices</option>
//                 <option value="fruits">fruits</option>
//               </select>
//             </div>

//             <div className="add-price flex-col">
//               <p>Product price(kg)</p>
//               <input
//                 onChange={onChangeHandle}
//                 value={data.price}
//                 type="number"
//                 name="price"
//                 placeholder="$20"
//                 required
//               />
//             </div>
//             <div className="add-farmer-name flex-col">
//               <p>Farmer name</p>
//               <input
//                 onChange={onChangeHandle}
//                 value={data.farmerName}
//                 type="text"
//                 name="farmerName"
//                 placeholder="farmer name"
//                 required
//               />
//             </div>
//             <div className="add-farmer-location flex-col">
//               <p>Farmer location</p>
//               <input
//                 onChange={onChangeHandle}
//                 value={data.farmerLocation}
//                 type="text"
//                 name="farmerLocation"
//                 placeholder="farmer location"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;

import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000"; // ✅ Make sure backend is running on this port
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    category: "vegetable", // Default category
    price: "",
    farmerName: "",
    farmerLocation: "",
  });

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandle = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name.trim());
    formData.append("category", data.category.trim());
    formData.append("price", Number(data.price));
    formData.append("farmerName", data.farmerName.trim());
    formData.append("farmerLocation", data.location.trim());

    try {
      const response = await axios.post(`${url}/api/Product/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", response.data); // ✅ Debugging output

      if (response.data.success) {
        setData({
          name: "",
          category: "vegetable",
          price: "",
          farmerName: "",
          location: "",
        });
        setImage(null);
        toast.success(response.data.message || "Product added successfully!");
      } else {
        toast.error(response.data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Axios error:", error);
      toast.error("Failed to add product. Check console for details.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandle}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload Preview"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            onChange={onChangeHandle}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product category</p>
              <select
                onChange={onChangeHandle}
                name="category"
                value={data.category}
              >
                <option value="vegetable">Vegetables</option>
                <option value="dairy">Dairy</option>
                <option value="millets">Millets</option>
                <option value="spices">Spices</option>
                <option value="fruits">Fruits</option>
              </select>
            </div>

            <div className="add-price flex-col">
              <p>Product price(kg)</p>
              <input
                onChange={onChangeHandle}
                value={data.price}
                type="number"
                name="price"
                placeholder="Price"
                required
              />
            </div>

            </div>
            <div className="add-farmer-name flex-col">
              <p>Farmer name</p>
              <input
                onChange={onChangeHandle}
                value={data.farmerName}
                type="text"
                name="farmerName"
                placeholder="Farmer name"
                required
              />
            </div>
            <div className="add-farmer-location flex-col">
              <p>Farmer location</p>
              <input
                onChange={onChangeHandle}
                value={data.location}
                type="text"
                name="location"
                placeholder="Farmer location"
                required
              />
            </div>
         
        </div>
        <button type="submit" className="add-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
