/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './header.scss';

const Header = () => {
  const [searchText, updateText] = useState('');

  const handleOnChange = (e) => {
    updateText(e.target.value);
  };

  return (
    <>
      <header className="header-wrapper">
        <div className="header">
          <div className="logo">
            <p>Freshworks</p>
            <p>Studio</p>
          </div>
          <div className="search-bar">
            <input
              type="text"
              name="search"
              value={searchText}
              onChange={(e) => handleOnChange(e)}
              placeholder="Search jobs by Skills, Designations"
            />
            <span className="search-icon">
              {searchText.length > 0 ? (
                <div onClick={() => updateText('')}>
                  <i className="fa fa-times-circle" aria-hidden="true" />
                </div>
              ) : (
                <i className="fa fa-search" aria-hidden="true" />
              )}
            </span>
          </div>
          <div className="logout">
            <i className="fa fa-sign-out" aria-hidden="true" />
          </div>
          <div className="hamburger-menu">
            <i className="fa fa-bars" aria-hidden="true" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
