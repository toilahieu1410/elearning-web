import React, { useState } from "react"
import {FaTimes, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {SidebarData} from '../../utilities/SidebarData'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={showSidebar}/>
        </Link>
        <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-login" to={'/login'}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-register" to={'/login'}>Register</Link>
              </li>
            </ul>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'  onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <FaTimes />
            </Link>
          </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>

      </nav>
    </>
  )
}

export default Navbar