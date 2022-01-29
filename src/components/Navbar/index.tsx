import React, { useState } from 'react';
import './Navbar.scss';
import Logo from '@assets/images/logo.png';
import { Input } from '@chakra-ui/react';
import { Search2Icon, CloseIcon } from '@chakra-ui/icons';

function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className='logo'>
          <img src={Logo} alt="logo" />
        </li>

        <li className='logo-mobile' >
          <button type='button' onClick={() => setOpenMenu(true)}>
            <img src={Logo} alt="logo" />
          </button>
        </li>

        <li className="navbar-list-search">
          <div className="search_item">
            <span>Helsinki</span>
          </div>

          <div className="search_input">
            <Input placeholder="Basic usage" />
          </div>

          <div className="search_icon">
            <Search2Icon color="#EB5757" />
          </div>
        </li>
      </ul>

      {true && <div className={openMenu ? "menu menu-active": "menu menu-inactive"}>
        <div className="menu-header">
          <h1>Edit your search</h1>
          <button type='button' onClick={() => setOpenMenu(false)}>
            <CloseIcon/>
          </button>
        </div>
        <ul>
          <li>asdfasdf</li>
          <li>asdfasdf</li>
          <li>asdfasdf</li>
          <li>asdfasdf</li>
        </ul>
      </div>}
    </nav>
  );
}

export default Navbar;
