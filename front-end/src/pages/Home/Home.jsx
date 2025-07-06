import { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import Chatbot from "../../components/Chatbot/Chatbot";



export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />

      <ExploreMenu category={category} setCategory={setCategory} />
      <ProductDisplay category={category} />
      <Chatbot />
     
    
    </div>
  );
};

export default Home;
