import React from 'react'
import "./Header.css";


const Header = () => {
  return (
    <div className='header'>

        
        <div className="header-contents" data-aos="fade-up">

            <h2 className='h2' data-aos="fade-down"> Order your  favorite goods from FarmFresh </h2>
            <p>FarmDirect Market connects local farmers directly with buyers, offering fresh, quality produce and essential farming tips.</p>
            
            <button><a href='#explore-menu'>View Menu</a></button>

        </div>


    </div>
  )
}

export default Header;