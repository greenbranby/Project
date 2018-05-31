import React from 'react';
import {NavLink} from 'react-router-dom';


//The navigation buttons for our App
const Nav = (props) =>
        <nav className = "main-nav">
              <ul>
                   <li><NavLink to='/ranunculus'>Ranunculus</NavLink></li>
                   <li><NavLink to='/tulips'>Tulips</NavLink></li>
                   <li><NavLink to='/peonies'>Peonies</NavLink></li>
              </ul>
          </nav>

          Nav.propTypes = {

          };

export default Nav;
