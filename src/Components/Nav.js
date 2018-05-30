import React from 'react';
import {NavLink} from 'react-router-dom';



const Nav = () =>
        <nav className = "main-nav">
              <ul>
                   <li><NavLink to='/ranunculus'>Ranunculus</NavLink></li>
                   <li><NavLink to='/tulips'>Tulips</NavLink></li>
                   <li><NavLink to='/peonies'>Peonies</NavLink></li>
              </ul>
          </nav>


export default Nav;
