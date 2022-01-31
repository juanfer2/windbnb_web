import React, { useState } from 'react';
import './Navbar.scss';
import Logo from '@assets/images/logo.png';
import { Search2Icon, CloseIcon } from '@chakra-ui/icons';
import ModalSearch from '@components/ModalSearch';

function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="logo">
          <img src={Logo} alt="logo" />
        </li>

        <li className="navbar-list-search">
          <div className="container-items" role="presentation" onClick={() => setOpenModal(true)}>
            <div className="search_item">
              <span>Helsinki, Finland</span>
            </div>

            <div className="search_guest">
              <span>Add Guest</span>
            </div>

            <div className="search_icon">
              <Search2Icon color="#EB5757" />
            </div>
          </div>
        </li>
      </ul>

      {openMenu && (
        <div className={openMenu ? 'menu menu-active' : 'menu menu-inactive'}>
          <div className="menu-header">
            <h1>Edit your search</h1>
            <button type="button" onClick={() => setOpenMenu(false)}>
              <CloseIcon />
            </button>
          </div>
          <ul>
            <li>asdfasdf</li>
            <li>asdfasdf</li>
            <li>asdfasdf</li>
            <li>asdfasdf</li>
          </ul>
        </div>
      )}

      <ModalSearch open={openModal} setOpen={setOpenModal} />
    </nav>
  );
}

export default Navbar;
