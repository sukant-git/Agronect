import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from '../../assets/assets';




const ExploreMenu = ({category,setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu' data-aos="fade-down">

        <h1>Explore our products</h1>
        <p className='explore-menu-text' >Discover the taste of purity straight from the farm. Every veggie, spice, and grain tells a story of care. Our dairy is fresh, our produce is handpicked, and our millets are rich in nutrients and love. I choose health, I choose freshness, I choose local 🥬. I support farmers, and they deliver the best to me 🧺. I see the difference in every bite I take. I shop smart. I shop FarmDirect 🧑‍🌾.</p>
        <div className="explore-menu-list" data-os="fade-down">
            {menu_list.map((items,index)=>{
                return(
                  <div onClick={()=>setCategory(prev=>prev==items.menu_name?"All":items.menu_name)} key={index} className='explore-menu-list-items' >
                    <img    className ={category==items.menu_name?"active":""}  src={items.menu_image}/> 
                    <p>{items.menu_name}</p> 

                    </div>

                )
            })}
        </div>
          <hr/>
    </div>
  )
}

export default ExploreMenu;


