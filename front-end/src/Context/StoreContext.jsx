import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { agri_List } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000";

  const [cartItem, setCartItem] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
      console.error("Error parsing cart from localStorage:", error);
      return {};
    }
  });

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [product_list, setProduct_list] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cartItem));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [cartItem]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  const addCart = async (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev?.[itemId] || 0) + 1,
    }));

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Failed to add item to cart:", error);
      }
    }
  };

  const removeCart = async (itemId) => {
    if (!cartItem?.[itemId]) return;

    setCartItem((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });

    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Failed to remove item from cart:", error);
      }
    }
  };

  const fetchProduct_list = async () => {
    try {
      const response = await axios.get(`${url}/api/Product/list`);
      if (response.data.success) {
        setProduct_list(response.data.products);
      } else {
        console.error("Error fetching product list:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch product list:", error);
    }
  };

  const gettotalCartAmt = () => {
    let totAmt = 0;

    if (!product_list.length) return totAmt;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        const itemInfo = product_list.find(
          (product) => String(product._id) === String(item)
        );
        if (itemInfo?.price) {
          totAmt += itemInfo.price * cartItem[item];
        }
      }
    }
    return totAmt;
  };

  const loadCartData = async () => {
    if (!token) return;
    try {
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.cartData) {
        setCartItem(response.data.cartData);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  
  useEffect(() => {
    fetchProduct_list();
    if (token) {
      loadCartData();
    }
  }, [token]);

  const contextValue = {
    product_list,
    cartItem,
    setCartItem,
    addCart,
    removeCart,
    gettotalCartAmt,
    url,
    token,
    setToken,
    agri_List,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
