import { FavoriteBorder, HeadsetMic, Person2Outlined, PersonOutlined, PinDrop, WorkOutlined } from '@mui/icons-material'
import React from 'react'

const Navbar = () => {
  return (
   <>
   {/* navbar */}
    <nav className='navbar'>
       <div className='navbar_top'>
            <p>20% Off! Code:SPRING21-Terms apply*</p>
       </div>
       <div className='navbar__middle'>
          <div >
           <ul className='navbar__logo'>
            <li><img src='Logo-lockup.png' height="30px" width="150px"/></li>
            <li></li>
            <li className="navbar__logo__mid">
                <HeadsetMic fontSize="small"/>
                <span>Support</span>
                <PinDrop fontSize="small"/>
                <span>Find a store</span>
            </li>

            <li>
                <FavoriteBorder/>
                <PersonOutlined/>
                <WorkOutlined/>
            </li>
           </ul>
          </div>
          <div>
          <ul >
           <li>xcdvdfg</li>
           <li>hfgh</li>
          </ul>
          </div>
       </div>
    </nav>
   </>
  )
}

export default Navbar